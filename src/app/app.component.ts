import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Post{
  title:string
  text:string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  ngOnInit():void {
    setTimeout(()=>{
     this.posts[0].title = 'Angular !!!'
    },5000)
  }


  posts:Post[] = [
    {title:'Хочу выучить Angular',text: 'Азыркы аракет,эртенки келечек',id:1},
  ]
  upDate(post:Post){
    this.posts.unshift(post)
    console.log("Post",post)
  }
  removePost(id:number){
    console.log(id)
    this.posts = this.posts.filter(p => p.id !== id)
  }

}
