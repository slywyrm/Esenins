import { ImageSrc } from './image-src.type';
import { Copyright } from './copyright';

export class Slide {
  text: string;
  image: ImageSrc;
  copyright?: Copyright;
}
