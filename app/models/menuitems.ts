import { MenuItem } from "./MenuItem";

export const menuItems: Array<MenuItem> = [
  new MenuItem("Home", "/", true),
  new MenuItem("Online Tutoring", "/onlineTutoring", false),
  new MenuItem("Pricing", "/pricing", false),
  new MenuItem("About Us", "/aboutus", false),
  new MenuItem("Contact", "/contact", false),
];
