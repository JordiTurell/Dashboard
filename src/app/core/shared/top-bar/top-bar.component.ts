import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();
  @Input() submenuOpen: boolean = true;
  
  constructor(){
    
  }
}
