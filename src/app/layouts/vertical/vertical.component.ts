import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLeftComponent } from "../../core/shared/menu-left/menu-left.component";
import { TopBarComponent } from "../../core/shared/top-bar/top-bar.component";

@Component({
  selector: 'app-vertical',
  imports: [RouterOutlet, MenuLeftComponent, TopBarComponent],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss'
})
export class VerticalComponent {

}
