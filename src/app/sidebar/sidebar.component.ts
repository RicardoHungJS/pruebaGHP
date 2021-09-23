import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  click : boolean;
  bool : boolean;
  sidebar: string;

  constructor() {
    this.bool = false;
    this.click = false;
    this.sidebar = "sidebarOff";
   }

  ngOnInit(): void {
  }
  
  abrir(){
    this.bool = !this.bool;
    this.click = this.bool;
    if (this.click) {
    this.sidebar = "sidebarOn";
    }
    else{
    this.sidebar = "sidebarOff";
    }
  }

}
