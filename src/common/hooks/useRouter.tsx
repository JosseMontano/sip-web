import { useLocation, useNavigate } from "react-router-dom";

export type RouterType = "/home" | "/dashboard/companies" | "/dashboard/users" | "/website"; 

const UseRouter = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentUrl = location.pathname;
    const handleNavigation = (path: RouterType) => {
        navigate(path);
    };


    return {
        currentUrl,
        handleNavigation
    }
}

export default UseRouter;