import { ImageSrc } from './image-src.type';
import { CopyrightModel } from './copyright.model';

export class SlideModel {
  text: string;
  image: ImageSrc;
  copyright?: CopyrightModel;
}
