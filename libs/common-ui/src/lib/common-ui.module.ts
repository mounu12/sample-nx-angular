import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonUiSampleComponent } from './common-ui-sample/common-ui-sample.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [LoginComponent, CommonUiSampleComponent],
  exports: [LoginComponent, CommonUiSampleComponent]
})
export class CommonUiModule {}
