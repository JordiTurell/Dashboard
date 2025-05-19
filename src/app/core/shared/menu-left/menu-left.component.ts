import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  imports: [],
  templateUrl: './menu-left.component.html',
  styleUrl: './menu-left.component.scss'
})
export class MenuLeftComponent {
  menuMobile(){
    const menu = document.getElementById("menuLeft") as HTMLElement;
    menu.classList.toggle("-translate-x-40");
  }
}
