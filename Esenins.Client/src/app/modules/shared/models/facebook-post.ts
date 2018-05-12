export interface FacebookTarget {
  id: string;
  url: string;
}

export interface FacebookPost {
  message?: string;
  shares?: { count: number };
  permalink_url: string;
  attachments?: {
    data: {
      subattachments: {
        data: {
          media: {
            image: {
              width: number,
              height: number,
              src: string
            }
          },
          target: FacebookTarget,
          type: string,
          url: string
        }[]
      },
      target: FacebookTarget,
      type: string,
      url: string
    }[]
  };
  updated_time: string;
}
