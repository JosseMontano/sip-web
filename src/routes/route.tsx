import PublicNavigation from "../common/components/publicNavigation/publicNavigation";
import Home from "../public/home/home";
import PrivateNavigation from "../common/components/privateNavigation/privateNavigation";
import Company from "../dashboard/company/company";
import Website from "../public/website/website";
import NotFound from "../public/notFound/notFound";
import Users from "../dashboard/users/users";

type Route = {
  path: string;
  element: JSX.Element;
  children: {
    path: string;
    element: JSX.Element;
  }[];
};

export const createRoutes = (): Route[] => {
  return [
    {
      path: "/",
      element: <PublicNavigation />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "website",
          element: <Website />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <PrivateNavigation />,
      children: [
        {
          path: "companies",
          element: <Company />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
    {
        path: "*",
        element: <NotFound />,
        children: [],
    }
  ];
};
