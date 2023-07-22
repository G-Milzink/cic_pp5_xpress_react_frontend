import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const hanbdleMount = async () => {
            try {
                await axios.post('dj-rest-auth/token/refresh/')
                if(userAuthStatus === 'loggedIn') {
                    history.push('/');
                }
            } catch (err) {
               if (userAuthStatus === 'loggedOut') {
                    history.push('/')
               }
            }
        }
        hanbdleMount();
    }, [userAuthStatus, history])
}