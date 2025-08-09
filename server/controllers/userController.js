import { Webhook } from "svix"
import userModel from "../models/userModel.js"; // Adjust the import path as necessary

export const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify(req.body, {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });
        const { data, type } = JSON.parse(req.body);

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url                    // Add any other relevant user information
                };
                await userModel.create(userData); // Use userModel instead of User
                res.json({ message: "User created successfully" });
                break;
            }

            case "user.updated": {
                const userUpdated = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                };
                await userModel.findOneAndUpdate({ clerkId: data.id }, userUpdated);
                res.json({ message: "User updated successfully" });
                break;
            }

            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id });
                res.json({ message: "User deleted successfully" });
                break;
            }
            default:
                break;
        }
    }
    catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).send("Internal Server Error");
        return;
    }
    // Handle the webhook event
};

export const userCredits = async (req, res) => {
    try {
        const clerkId = req.user.clerkId;
        const user = await userModel.findOne({ clerkId });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, creditBalance: user.creditBalance });
    } catch (error) {
        console.error("Error fetching user credits:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


