import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-apps-menu',
  imports: [],
  templateUrl: './apps-menu.component.html',
  styleUrl: './apps-menu.component.scss'
})
export class AppsMenuComponent {
  @Output() openApps: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { 

  }
}
