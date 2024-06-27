import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { SectionDeviderComponent } from './components/section-devider/section-devider.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ShowcaseComponent,
    SectionDeviderComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    ProjectsPageComponent,
    AboutMePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
