import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [

    trigger("moveLink", [
      state(
        "inactive",
        style({
          width:'0%',
        })
      ),
      state(
        "active",
        style({
          width:'100%',
        })
      ),
      transition("inactive => active", animate("300ms ease-in")),
      transition("active => inactive", animate("300ms ease-out"))
    ]),

  ]
})
export class NavbarComponent implements OnInit {
  state:string[] = ['inactive','inactive','inactive','inactive','inactive'];
  items=[
    {
      name:'O MNIE',
      link:'whoAmI'
    },
    {
      name:'UMIEJĘTNOŚCI',
      link:'skills'
    },
    {
      name:'PROJEKTY',
      link:'projects'
    },
    {
      name:'KONTAKT',
      link:'contact'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  mouseEnter(i){
    this.state[i] = 'active';
}
  mouseLeave(i){
  this.state[i] = 'inactive';
  }

}
