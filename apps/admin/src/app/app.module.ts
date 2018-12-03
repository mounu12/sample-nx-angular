import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { adminDashboardRoutes } from '@poc/admin/dashboard';
import { SharedModule } from '@poc/shared';
import { CommonUiLoginModule } from '@poc/common-ui/login';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperimentalExpModule } from '@poc/experimental/exp';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FeaturesComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'admin-dashboard', children: adminDashboardRoutes },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        {
          path: 'login',
          loadChildren: '@poc/common-ui/login#CommonUiLoginModule'
        },
        { path: 'home', component: HomeComponent },
        { path: 'features', component: FeaturesComponent }
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedModule,
    BrowserAnimationsModule,
    /* ExperimentalExpModule */
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule {}
