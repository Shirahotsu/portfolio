import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsLogo:any;
  constructor() {
    this.skillsLogo=[
      {
        img:'angular',
        name:'Angular'
      },
      {
        img:'ts',
        name:'Type Script'
      },
      {
        img:'js',
        name:'Java Script'
      },
      {
        img:'es6',
        name:'ES6'
      },
      {
        img:'git',
        name:'GIT'
      },
      {
        img:'node',
        name:'Node.js'
      },
      {
        img:'react',
        name:'React.js'
      },
      {
        img:'rwd',
        name:'Responsive web design'
      },
      {
        img:'ps',
        name:'Photoshop'
      },
      {
        img:'vscode',
        name:'VSCode'
      },
      {
        img:'xd',
        name:'Adobe Xd'
      },
      {
        img:'css',
        name:'CSS'
      },
      {
        img:'npm',
        name:'Node Package Manager'
      },
      {
        img:'gulp',
        name:'Gulp'
      },
      {
        img:'mdb',
        name:'Material Design Bootstrap'
      },
      {
        img:'sass',
        name:'Sass'
      },
      {
        img:'json',
        name:'JSON'
      },
      {
        img:'bootstrap',
        name:'Bootstrap'
      },
      {
        img:'ajax',
        name:'Ajax'
      },
      {
        img:'jquery',
        name:'jQuery'
      },
      {
        img:'html',
        name:'HTML5'
      },
      {
        img:'materialize',
        name:'MaterializeCSS'
      },
      {
        img:'mysql',
        name:'MySql'
      },
    ]
  }

  ngOnInit() {
  }

}
