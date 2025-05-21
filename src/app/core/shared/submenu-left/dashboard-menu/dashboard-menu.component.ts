import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  imports: [NgClass],
  templateUrl: './dashboard-menu.component.html',
  styleUrl: './dashboard-menu.component.scss'
})
export class DashboardMenuComponent {
  cryptoOpen = false;
  bankaOpen = false;

  toggleCrypto() {
    this.cryptoOpen = !this.cryptoOpen;
  }

  toggleBanka() {
    this.bankaOpen = !this.bankaOpen;
  }
}
