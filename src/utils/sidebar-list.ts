import Icons from "../components/style/icons/icons";
import ISidebarItem from "../interfaces/sidebar.interface";

const SidebarList: ISidebarItem[] = [
  {
    name: "Início",
    route: "/home",
    icon: Icons.SpaceDashboardIcon,
  },
  {
    name: "Suporte",
    route: "/support",
    icon: Icons.HelpCenterIcon,
    childrens: [
      {
        name: "Documentação",
        route: "/documentation",
        icon: Icons.CircleIcon,
      },
      {
        name: "Contato",
        route: "/contact",
        icon: Icons.CircleIcon,
      },
    ],
  },
];

export default SidebarList;
