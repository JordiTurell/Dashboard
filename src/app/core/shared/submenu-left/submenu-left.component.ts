import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DashboardMenuComponent } from "@core/shared/submenu-left/dashboard-menu/dashboard-menu.component";
import { AppsMenuComponent } from "@core/shared/submenu-left/apps-menu/apps-menu.component";
import { ComponentsMenuComponent } from "@core/shared/submenu-left/components-menu/components-menu.component";
import { FormsMenuComponent } from "@core/shared/submenu-left/forms-menu/forms-menu.component";
import { TablesMenuComponent } from "@core/shared/submenu-left/tables-menu/tables-menu.component";
import { PrototypesMenuComponent } from "@core/shared/submenu-left/prototypes-menu/prototypes-menu.component";
import { optionsMenuTitle } from '@core/shared/utils/options-menu';
import { ChatComponent } from "@core/shared/submenu-left/apps-menu/chat/chat.component";
import { apssMenuOptions } from '@core/shared/utils/apps-menu';

@Component({
  selector: 'app-submenu-left',
  imports: [DashboardMenuComponent, AppsMenuComponent, ComponentsMenuComponent, FormsMenuComponent, TablesMenuComponent, PrototypesMenuComponent, ChatComponent],
  templateUrl: './submenu-left.component.html',
  styleUrl: './submenu-left.component.scss'
})
export class SubmenuLeftComponent implements OnChanges {
  @Input() title: string = '';
  @Input() tipeMenu: string = '';
  @Input() submenu: string = '';
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.tipeMenu = this.getTipoByTitle(this.title) || '';
  }

  openApps(tipe:string){
    if(this.tipeMenu === 'apps') {
      this.submenu = this.getTipoSubMenu(tipe) || '';
      if(this.submenu != '') {
        this.tipeMenu = '';
        console.log(this.submenu);
      }
    }
  }

  getTipoByTitle(title: string): string | undefined {
    const entry = Object.entries(optionsMenuTitle).find(([key, value]) => value === title);
    return entry ? entry[0] : undefined;
  }

  getTipoSubMenu(tipeMenu: string): string | undefined{
    const entry = Object.entries(apssMenuOptions).find(([key, value]) => value === tipeMenu);
    return entry ? entry[0] : undefined;
  }
}
