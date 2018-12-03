import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { clientAboutRoutes } from '@poc/client/about';
import { CommonUiLoginModule } from '@poc/common-ui/login';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@poc/shared';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'client-about', children: clientAboutRoutes },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        {
          path: 'login',
          loadChildren: '@poc/common-ui/login#CommonUiLoginModule'
        },
        { path: 'home', component: HomeComponent }
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule {}
