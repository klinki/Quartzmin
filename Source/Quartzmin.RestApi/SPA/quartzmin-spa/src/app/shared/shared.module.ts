import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncDataWrapperComponent } from './async-data/async-data-wrapper/async-data-wrapper.component';
import { AsyncDataErrorComponent } from './async-data/async-data-error/async-data-error.component';
import { AsyncDataSuccessComponent } from './async-data/async-data-success/async-data-success.component';
import { AsyncDataLoadingComponent } from './async-data/async-data-loading/async-data-loading.component';

export const declareAndExport = [
  AsyncDataWrapperComponent,
  AsyncDataErrorComponent,
  AsyncDataSuccessComponent,
  AsyncDataLoadingComponent
];


@NgModule({
  declarations: [
    ...declareAndExport
  ],
  exports: [
    ...declareAndExport
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }