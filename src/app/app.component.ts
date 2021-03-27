import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'czarVideos';
  isCollapsed= false;

  constructor(){

  }
  
  ngOnInit(): void {

  }

  muda(tal:string){
    this.title = tal;
  }
}
