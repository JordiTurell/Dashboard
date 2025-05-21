import { Component, Output } from '@angular/core';

import { MenuLeftIconsComponent } from "../../core/shared/menu-left-icons/menu-left-icons.component";
import { SubmenuLeftComponent } from "../../core/shared/submenu-left/submenu-left.component";
import { TopBarComponent } from "../../core/shared/top-bar/top-bar.component";
import { RouterModule } from '@angular/router';
import { optionsMenuTitle } from '../../core/shared/utils/options-menu';

@Component({
  selector: 'app-vertical',
  imports: [MenuLeftIconsComponent, SubmenuLeftComponent, TopBarComponent, RouterModule],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss'
})
export class VerticalComponent {
  title: string = 'Dashboard';
  activeMenu: string = 'dashboard';

  handleMenuChange(menu: string) {
    this.activeMenu = menu;
    const titles = optionsMenuTitle;
    this.title = titles[menu] || menu;
  }  
}
