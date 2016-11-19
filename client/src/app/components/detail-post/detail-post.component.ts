import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FacebookService, FacebookInitParams, FacebookLoginResponse } from 'ng2-facebook-sdk/dist';

import { AppState } from '../../reducers';
import { DetailPostActions } from '../../actions';
import { DetailPost } from '../../models';

@Component({
  selector: 'wb-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit, DoCheck {
  private detailPost: DetailPost;
  private correntId = '';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private detailPostActions: DetailPostActions,
    private fb: FacebookService,
  ) {
    store.select(state => state.detailPost).subscribe(
      (res) => this.detailPost = res
    );

    let fbParams: FacebookInitParams = {
      appId   : '1063610257017045',
      cookie  : true,  // enable cookies to allow the server to access the session
      xfbml   : true,  // parse social plugins on this page
      version : 'v2.7' // use graph api version 2.7
    };
    this.fb.init(fbParams);
  }

  ngOnInit() {
    this.correntId = this.route.snapshot.params['uuid'];
    this.store.dispatch(this.detailPostActions.loadDetailPost(this.correntId));
  }

  ngDoCheck() {
    // Check if the url has changed, if it is, change the data (dispatch an action).
    if (this.correntId !== this.route.snapshot.params['uuid']) {
      this.correntId = this.route.snapshot.params['uuid'];
      this.store.dispatch(this.detailPostActions.loadDetailPost(this.correntId));
    }
  }

  onFacebookLoginClick(gameId) {
    this.loadPlaybuzzScript();

    this.fb.login().then(
      (response: FacebookLoginResponse) => {
        if (response.status = 'connected') {
          let game = {
            userID: response.authResponse.userID,
            accessToken: response.authResponse.accessToken,
            unique_id: this.correntId
          }
          this.store.dispatch(this.detailPostActions.loadFacebookGamePost(game));
        }
      }
    );
  }

  loadPlaybuzzScript() {
    let node = document.createElement('script');
    node.src = '//cdn.playbuzz.com/widget/feed.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
