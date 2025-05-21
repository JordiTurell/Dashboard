import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DashboardMenuComponent } from "./dashboard-menu/dashboard-menu.component";
import { AppsMenuComponent } from "./apps-menu/apps-menu.component";
import { ComponentsMenuComponent } from "./components-menu/components-menu.component";
import { FormsMenuComponent } from "./forms-menu/forms-menu.component";
import { TablesMenuComponent } from "./tables-menu/tables-menu.component";
import { PrototypesMenuComponent } from "./prototypes-menu/prototypes-menu.component";
import { optionsMenuTitle } from '../utils/options-menu';

@Component({
  selector: 'app-submenu-left',
  imports: [DashboardMenuComponent, AppsMenuComponent, ComponentsMenuComponent, FormsMenuComponent, TablesMenuComponent, PrototypesMenuComponent],
  templateUrl: './submenu-left.component.html',
  styleUrl: './submenu-left.component.scss'
})
export class SubmenuLeftComponent implements OnChanges {
  @Input() title: string = '';
  @Input() tipeMenu: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const tipos = optionsMenuTitle;
    this.tipeMenu = this.getTipoByTitle(this.title) || '';
    console.log(this.tipeMenu)
  }

  getTipoByTitle(title: string): string | undefined {
    const entry = Object.entries(optionsMenuTitle).find(([key, value]) => value === title);
    return entry ? entry[0] : undefined;
  }
}
