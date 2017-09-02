import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PostsService } from '../services/posts.service';
import * as facebookGames from '../actions/facebookGames';

@Injectable()
export class FacebookGamesEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) { }

  @Effect()
  loadFacebookGamesPosts$: Observable<Action>= this.actions$
    .ofType(facebookGames.LOAD_FACEBOOK_GAMES_POSTS)
    .switchMap(_ => this.postsService.getFacebookGamesPosts()
      .map(postsData => new facebookGames.LoadFacebookGamesPostsSuccessAction(postsData))
      // .catch(error => Observable.of(getPostsFail(error)))
    );

}
