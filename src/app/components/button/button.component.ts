import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() textValue:string = ""
  @Output() clicked = new EventEmitter<void>()
  @Input()isLoading:boolean = false

  onClick(){
    this.clicked.emit()
  }
}
