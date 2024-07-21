import { Outlet } from "react-router-dom";

const PublicNavigation = () => {
  return (
    <>
      <div>navbar public</div>
      <Outlet />
    </>
  );
};

export default PublicNavigation;
