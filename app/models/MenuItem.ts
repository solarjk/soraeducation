export class MenuItem {
  name: string;
  url: string;
  current: boolean;

  constructor(name: string, href: string, current: boolean) {
    this.name = name;
    this.url = href;
    this.current = current;
  }
}
