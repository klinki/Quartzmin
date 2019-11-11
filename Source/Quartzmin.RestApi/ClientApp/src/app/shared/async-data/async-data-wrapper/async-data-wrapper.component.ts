import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { AsyncData } from '../../../utils/async-data';
import { AsyncDataErrorDirective } from '../async-data-error/async-data-error-directive.component';
import { AsyncDataLoadingDirective } from '../async-data-loading/async-data-loading.directive';
import { AsyncDataSuccessDirective } from '../async-data-success/async-data-success.directive';

@Component({
  selector: 'app-async-data-wrapper, [app-async-data-wrapper]',
  templateUrl: './async-data-wrapper.component.html',
  styleUrls: ['./async-data-wrapper.component.scss']
})
export class AsyncDataWrapperComponent<T, E> implements OnInit, AfterContentInit {
  @Input()
  data: AsyncData<T, E>;

  @ContentChild(AsyncDataErrorDirective, { read: TemplateRef })
  errorComponent: TemplateRef<AsyncDataErrorDirective>;

  @ContentChild(AsyncDataLoadingDirective, { read: TemplateRef })
  loadingComponent: TemplateRef<AsyncDataLoadingDirective>;

  @ContentChild(AsyncDataSuccessDirective, { read: TemplateRef })
  successComponent: TemplateRef<AsyncDataSuccessDirective<T, E>>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.successComponent == null) {
      throw new Error('AsyncDataSuccessComponent must be defined');
    }
  }
}
