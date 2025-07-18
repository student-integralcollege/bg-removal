import {createContext,useState} from 'react';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import {toast} from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = ({props}) => {

    const [credit, setcredits] = useState(0);
     
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const { getToken } = useAuth();

    const loadCredits = async () => {
        try {
            const token = await getToken();
            const {data} = await axios.get(backendUrl+'api/user/credits',{
                headers: {
                    token: token
                }
            });
            if (data.success) {
                setcredits(data.credits);
            }
        } catch (error) {
            console.error("Error loading credits:", error);
            toast.error(error.message);
        }
    };
    const value = {
        credit, setcredit,
        loadCredits,
        backendUrl,
        image, setImage
    };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;