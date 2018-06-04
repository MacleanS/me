import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsService } from './services/skills/skills.service';
import { HearthstoneService } from './services/hearthstone/hearthstone.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Observable } from 'rxjs';
import { HearthstoneComponent } from './portfolio/components/hearthstone/hearthstone.component';
import { InputFormComponent } from './portfolio/components/hearthstone/components/input-form/input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsContainerComponent } from './portfolio/components/hearthstone/components/cards-container/cards-container.component';
import { KeysPipe } from './keys.pipe';
import { CardComponent } from './portfolio/components/hearthstone/components/card/card.component';
import { InfoComponent } from './common/info/info.component';
import { HobbyComponent } from './about/components/hobby/hobby.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineDateComponent } from './timeline/components/timeline-date/timeline-date.component';
import { TimelineDescriptionComponent } from './timeline/components/timeline-description/timeline-description.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },{
    path: '',
    component: HomeComponent
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'about',
    component: AboutComponent
  }, {
    path: 'portfolio',
    component: PortfolioComponent
  }, {
    path: 'portfolio/hearthstone',
    component: HearthstoneComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({  
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    IntroductionComponent,
    PortfolioComponent,
    HearthstoneComponent,
    InputFormComponent,
    CardsContainerComponent,
    KeysPipe,
    CardComponent,
    InfoComponent,
    HobbyComponent,
    SkillsComponent,
    TimelineComponent,
    TimelineDateComponent,
    TimelineDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AnimateOnScrollModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ 
    // { provide: AosToken, useValue: aos }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
