import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from '@core/shared/utils/icons';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit {
  @Input() tooltip = '';
  @Input() tipoicon: 'dashboard' | 'components' | 'forms' | 'tables' | 'prototypes' | 'apps' | 'config' | '' = '';
  @Input() icons = ICONS;  
  @Input() icon!: SafeHtml;
  sanitized: DomSanitizer = inject(DomSanitizer);

  ngOnInit() {
    console.log('icon input:', this.icon);
    console.log('SVG:', this.icons[this.tipoicon]);
    this.icon = this.sanitized.bypassSecurityTrustHtml(this.icons[this.tipoicon])
  }
}
