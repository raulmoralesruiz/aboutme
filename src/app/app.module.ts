import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { IntroComponent } from './intro/intro.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    IntroComponent,
    ExpertiseComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProfilesComponent,
    PortfolioComponent,
    ContactComponent,
    CertificatesComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
