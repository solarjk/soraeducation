import { Menu, Transition } from "@headlessui/react";
import { MenuItem } from "~/models/MenuItem";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const MenuMap = (props: { items: Array<MenuItem> }) => {
  return props.items.map((item: MenuItem) => (
    <a
      key={item.name}
      href={item.url}
      className={classNames(
        "m-1 inline-block flex rounded-full px-6 py-2.5 align-middle text-sm font-medium text-black hover:bg-blue-400 hover:text-white"
      )}
      aria-current={undefined}
    >
      {item.name}
    </a>
  ));
};
