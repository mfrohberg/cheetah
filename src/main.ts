import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  HTTP_PROVIDERS,
  defaultFirebase('https://aristocrats.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Github,
    method: AuthMethods.Popup
  })
]);
