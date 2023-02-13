import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectUser } from "redux/auth/selectorAuth"


export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        user,
    }
}