import { Outlet } from "react-router-dom";

const PublicNavigation = () => {
  return (
    <>
      {/*       <div>navbar public test</div> */}
      <Outlet />
    </>
  );
};

export default PublicNavigation;
