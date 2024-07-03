import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-options',
  standalone: true,
  imports: [NgClass],
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.css'
})
export class ConfigOptionsComponent{
  configOpened: boolean= false;
  @Input() domainData: any;
  settingsToggle(){
      this.configOpened=!this.configOpened
  }
}
