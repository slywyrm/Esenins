import { ImageSrc } from './image-src.type';
import { CopyrightModel } from './copyright.model';

export class Slide {
  text: string;
  image: ImageSrc;
  copyright?: CopyrightModel;
}
