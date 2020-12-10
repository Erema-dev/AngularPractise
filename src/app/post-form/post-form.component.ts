import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd = new EventEmitter()
  @ViewChild('titleName', {static: false}) inputRef: ElementRef
  name = ''
  title = ''
  text = ''
  flagFill = false

  constructor() { }

  ngOnInit(): void {
  }

  addPost(){
    if(this.text.trim() && this.title.trim() && this.name.trim()) {
      const post: Post = {
        name: this.name,
        title: this.title,
        text: this.text
      }
      this.flagFill = false
      this.onAdd.emit(post)
      this.title = this.text = this.name = ''
    } else this.flagFill = true
  }

  focusName(){
    this.inputRef.nativeElement.focus()
  }

}
