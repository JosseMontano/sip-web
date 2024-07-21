import { Outlet } from "react-router-dom";

const PrivateNavigation = () => {
  return (
    <>
      <div>dashboard</div>
      <Outlet />
    </>
  );
};

export default PrivateNavigation;
