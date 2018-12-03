import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { sampleSampleRoutes } from '@poc/sample/sample';
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
        { path: 'sample-sample', children: sampleSampleRoutes },
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
