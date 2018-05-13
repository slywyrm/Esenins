export interface FacebookTarget {
  id: string;
  url: string;
}

export interface FacebookMedia {
  image?: {
    width: number,
    height: number,
    src: string
  };
}

export interface FacebookPost {
  message?: string;
  shares?: { count: number };
  permalink_url: string;
  // attachments?: {
  //   data: {
  //     subattachments?: {
  //       data: {
  //         media: FacebookMedia,
  //         target: FacebookTarget,
  //         type: string,
  //         url: string
  //       }[]
  //     },
  //     media?: FacebookMedia,
  //     target: FacebookTarget,
  //     type: string,
  //     url: string
  //   }[]
  // };
  full_picture: string;
  link: string;
  updated_time: string;
}
