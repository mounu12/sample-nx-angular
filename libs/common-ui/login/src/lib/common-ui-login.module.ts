import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LoginComponent }
    ]),
    HttpClientModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService],
  exports: [LoginComponent]
})
export class CommonUiLoginModule {}
