import { Webhook } from "svix"

const clerkwebhook = async (req, res) => {
    try{
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify((JSON.stringify(req.body)),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const {data, type} = req.body;

        switch(type) {
            case "user.created":{

                break;
            }
            case "user.updated":
                // Handle user.updated event
                break;
            case "user.deleted":
                // Handle user.deleted event
                break;
            default:
                console.warn("Unhandled webhook event type:", type);
        }
    }
    catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).send("Internal Server Error");
        return;     
    }
    // Handle the webhook event
};

export default clerkwebhook;
export { clerkwebhook };    

