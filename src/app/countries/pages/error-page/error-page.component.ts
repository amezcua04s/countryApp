import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: ``
})
export class ErrorPageComponent {

  public onLoad() : void {
    setTimeout(() => {
    }, 2000);

  }

}
