import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeHolder : string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  emmitValue( value : string) : void {
    this.onValue.emit( value )
  }

}
