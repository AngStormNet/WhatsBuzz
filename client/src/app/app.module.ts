import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FacebookModule } from 'ngx-facebook';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';

import { AppRoutingModule } from './app-routing.module';

import { WbComponent } from './wb.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { BuzzComponent } from './components/buzz/buzz.component';
import { FacebookGamesComponent } from './components/facebook-games/facebook-games.component';
import { TrendsComponent } from './components/trends/trends.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { PostsService } from './services/posts.service';
import { BuzzService } from './services/buzz.service';
import { FbService } from './services/fb.service';

import { FacebookGamesEffects } from './effects/facebookGames';
import { TrendsEffects } from './effects/trends';
import { BuzzEffects } from './effects/buzz';
import { FbEffects } from './effects/fb';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    WbComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    BuzzComponent,
    FacebookGamesComponent,
    TrendsComponent,
    PrivacyPolicyComponent,
    NotFoundComponent,
    DetailPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      FacebookGamesEffects,
      TrendsEffects,
      BuzzEffects,
      FbEffects,
   ]),
  ],
  providers: [
    PostsService,
    BuzzService,
    FbService,
  ],
  bootstrap: [WbComponent]
})
export class AppModule { }
