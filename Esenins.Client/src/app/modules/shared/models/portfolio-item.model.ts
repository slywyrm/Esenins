import { ImageSrc } from './image-src.type';
import { Copyright } from './copyright';

export type TileSize = 'long' | 'tall' | 'big';

export interface PortfolioItem {
  id: string;
  name: string;
  subName: string;
  annotation: string;
  description: string;
  placeholderPhoto: ImageSrc;
  tileSize?: TileSize;
  photos: { id: string, path: string }[];
  copyright?: Copyright;
}
