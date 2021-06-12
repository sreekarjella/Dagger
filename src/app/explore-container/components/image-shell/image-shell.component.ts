import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-image-shell',
  templateUrl: './image-shell.component.html',
  styleUrls: ['./image-shell.component.scss'],
})
export class ImageShellComponent {
  // tslint:disable-next-line: variable-name
  _src = '';
  // tslint:disable-next-line: variable-name
  _alt = '';

  @HostBinding('class.img-loaded') imageLoaded = false;

  @Input()
  set src(val: string) {
    this._src = (val !== undefined && val !== null) ? val : '';
  }

  @Input()
  set alt(val: string) {
    this._alt = (val !== undefined && val !== null) ? val : '';
  }

  constructor() {}

  _imageLoaded() {
    this.imageLoaded = true;
  }
}
