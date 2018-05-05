import { ImageSrc } from './image-src.type';
import { CopyrightModel } from './copyright.model';

export type TileSize = 'long' | 'tall' | 'big';

export interface PortfolioItem {
  id: string;
  name: string;
  subName: string;
  annotation: string;
  description: string;
  placeholderPhoto: ImageSrc;
  tileSize?: TileSize;
  photos: ImageSrc[];
  copyright?: CopyrightModel;
}
