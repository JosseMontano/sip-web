import PublicNavigation from "../common/components/publicNavigation/publicNavigation";
import Home from "../public/home/home";
import PrivateNavigation from "../common/components/privateNavigation/privateNavigation";
import Company from "../dashboard/company/company";
import Website from "../public/website/website";
import NotFound from "../public/notFound/notFound";

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
          path: "home",
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
          path: "company",
          element: <Company />,
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
