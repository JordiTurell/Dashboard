import { Component, EventEmitter, Output } from '@angular/core';
import { IconsComponent } from "@core/shared/menu-left-icons/icons/icons.component";

@Component({
  selector: 'app-menu-left-icons',
  imports: [IconsComponent],
  templateUrl: './menu-left-icons.component.html',
  styleUrl: './menu-left-icons.component.scss'
})
export class MenuLeftIconsComponent {
  @Output() menuChange: EventEmitter<string> = new EventEmitter<string>();

  onIconClick(tipoicon: string) {
    this.menuChange.emit(tipoicon);
  }
}
