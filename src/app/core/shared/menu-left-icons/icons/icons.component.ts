import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
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

  @Output() iconClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    
  }

  ngOnInit() {
    this.icon = this.sanitized.bypassSecurityTrustHtml(this.icons[this.tipoicon])
  }

  handleClick() {
    this.iconClick.emit(this.tipoicon);
  }
}
