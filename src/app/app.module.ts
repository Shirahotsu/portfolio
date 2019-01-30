import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoToTopComponent } from './components/go-to-top/go-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WhoAmIComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    GoToTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
