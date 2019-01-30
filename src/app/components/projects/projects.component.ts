import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [

    trigger("movePanel", [
      state(
        "inactive",
        style({
          transform: 'translateY(100%)'
        })
      ),
      state(
        "active",
        style({
          transform: 'translateY(0%)'
        })
      ),
      transition("inactive => active", animate("300ms ease-in")),
      transition("active => inactive", animate("300ms ease-out"))
    ]),

  ]

})
export class ProjectsComponent implements OnInit {
  imageInfo:boolean[] = [false,false,false,false,false,false,];
  state:string[] = ['inactive','inactive','inactive','inactive','inactive','inactive',];
  images = [
    {
      name:'Agromat',
      img:'https://shirahotsu.github.io/portfolio/assets/agromat.jpg',
      link:'https://www.agromat.com.pl/',
      text:'JavaScript, jQuery, PHP, MaterializeCSS, Gulp'
    },
    {
      name:'Serwis',
      img:'https://shirahotsu.github.io/portfolio/assets/serwis.jpg',
      link:'http://www.wtryskiwacz.net/',
      text:'JavaScript, jQuery, PHP, Bootstrap, Gulp'
    },
    {
      name:'Alfamilk',
      img:'https://shirahotsu.github.io/portfolio/assets/alfamilk.jpg',
      link:'http://alfamilk.com/',
      text:'JavaScript, jQuery, PHP, Bootstrap, Gulp'
    },
    {
      name:'SomethingLikeOlx',
      img:'https://shirahotsu.github.io/portfolio/assets/somethingLikeOlx.jpg',
      link:'https://github.com/Shirahotsu/somethingLikeOLX',
      text:'Angular 7, JavaScript, TypeScript, RxJS, WebPack, Material Design for Bootstrap'
    },
    {
      name:'AceLan',
      img:'https://shirahotsu.github.io/portfolio/assets/acelan.jpg',
      link:'http://acelan.acedu.pl/',
      text:'JavaScript, jQuery, PHP, MaterializeCSS'
    },
    {
      name:'GitHub',
      img:'https://shirahotsu.github.io/portfolio/assets/github.jpg',
      link:'https://github.com/Shirahotsu',
      text:'Inne mniejsze projekty'
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
