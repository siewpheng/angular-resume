import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ParticularsWorksComponent } from './particulars-works/particulars-works.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DescriptionComponent } from './description/description.component';
import { ParticularsComponent } from './particulars/particulars.component';
import { PageTileComponent } from './page-tile/page-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
    ProfessionalDetailsComponent,
    ParticularsWorksComponent,
    PersonalDetailsComponent,
    DescriptionComponent,
    ParticularsComponent,
    PageTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
