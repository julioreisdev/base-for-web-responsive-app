import { SvgIconComponent } from "@mui/icons-material";

export default interface ISidebarItem {
  name: string;
  icon: SvgIconComponent;
  route: string;
  childrens?: ISidebarItem[];
}
