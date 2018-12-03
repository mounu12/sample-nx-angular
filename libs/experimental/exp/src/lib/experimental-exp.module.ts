import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExperimentalComponent } from './experimental/experimental.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ExperimentalComponent }
    ])
  ],
  declarations: [ExperimentalComponent],
  exports: [ExperimentalComponent]
})
export class ExperimentalExpModule {}
