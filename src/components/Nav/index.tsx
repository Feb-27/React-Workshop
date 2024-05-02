import {
  ChartPieIcon,
  HomeIcon,
  PencilSquareIcon,
  TableCellsIcon,
  HeartIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import List from "./List";

const Nav = () => {
  const navs = [
    {
      title: "DASHBOARDS",
      items: [
        {
          path: "home",
          name: "Home",
          icon: <HomeIcon className="h-5 w-5 stroke-white" />,
        },
      ],
    },
    {
      title: "COMPONENTS",
      items: [
        {
          name: "Forms",
          icon: <PencilSquareIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "General Form",
              path: "forms/general",
            },
            // {
            //   name: "Advanced Form",
            //   path: "forms/advanced",
            // },
          ],
        },
        {
          name: "UTS",
          icon: <TableCellsIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Customer Services",
              path: "tables/basic",
            },
            {
              name: "Customer Services Edit",
              path: "tables/edit",
            },
            {
              name: "Customer Services Add",
              path: "tables/tambah",
            },
          ],
        },
        {
          name: "Master Menu",
          icon: <ChartPieIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Data Priorities",
              path: "charts/apex",
            },
            {
              name: "Data Department",
              path: "charts/chartjs",
            },
          ],
        },
        {
          name: "Icons",
          icon: <HeartIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "heroicons",
              path: "icons/heroicons",
            },
            // {
            //   name: "Bootstrap",
            //   path: "icons/bootstrap",
            // },
          ],
        },
      ],
    },
    {
      title: "PAGES",
      items: [
        {
          name: "Pages",
          icon: <DocumentIcon className="h-5 w-5 stroke-white" />,
          child: [
            {
              name: "Sign In",
              path: "sign-in",
            },
            {
              name: "Sing Up",
              path: "sign-up",
            },
            {
              name: "404 Error",
              path: "404",
            },
            {
              name: "500 Error",
              path: "500",
            },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="mt-4">
      <ul className="flex flex-col gap-2 text-white">
        {navs.map((i) => (
          <List nav={i} key={i.title} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
