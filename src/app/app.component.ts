import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Post{
  name:string;
  title: string;
  text: string;
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})


export class AppComponent implements OnInit {

  search: string = ''
  posts: Post[] = [
    {name: "Erema", title:'Хочу выучить ангуляр компоненты', text: 'Я все еще учу компоненты', id:1},
    {name: "Erema", title:'Я обещаю', text: 'Выучу в следующем году', id:2}
  ]
  title: any;
  tmpString = ''
  
  ngOnInit(): void{
    
  }
  
  updatePosts(post:Post){
    this.posts.unshift(post)
  }

  DeletePost(post:Post){
    let index = this.posts.indexOf(post)
    this.posts.splice(index,1)
  }
}
