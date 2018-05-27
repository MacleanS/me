import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
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
  },{
    path: 'contact',
    component: ContactComponent
  },{
    path: 'portfolio',
    component: PortfolioComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({  
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
    HearthstoneComponent,
    InputFormComponent,
    CardsContainerComponent,
    KeysPipe,
    CardComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
