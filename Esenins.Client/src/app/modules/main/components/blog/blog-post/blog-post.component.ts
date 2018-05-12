import { Component, Input, OnInit } from '@angular/core';
import { FacebookPost } from '../../../../shared/models/facebook-post';
import * as _ from 'lodash';

@Component({
  selector: 'es-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() post: FacebookPost;

  get images(): any {
    if (!this.post.attachments.data && !this.post.attachments.data[0].subattachments.data) {
      return [];
    }
    return _.chain(this.post.attachments.data[0].subattachments.data)
      .take(4).toArray()
      .map(item => item.media.image.src);
  }

  constructor() { }

  ngOnInit() {
  }

}
