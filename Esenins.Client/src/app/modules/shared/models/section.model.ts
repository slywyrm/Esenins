export class Section {
  name: string;
  russianName: string;
  textColor: string;
  menuImgSrc: string;
  needsHeight?: boolean;

  getMenuImgUrl?: () => string = () => {
    return `url(${this.menuImgSrc})`;
  }
}
