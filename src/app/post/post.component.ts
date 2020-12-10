import { AfterContentChecked, AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  @Output() onDelete = new EventEmitter()


  constructor() { }

  ngOnInit (){
    
  }

  deletePost(){
    this.onDelete.emit(this.post)
  }

}
