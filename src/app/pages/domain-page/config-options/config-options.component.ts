import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-config-options',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.css'
})
export class ConfigOptionsComponent implements OnChanges{
  configOpened: boolean= false;
  show : boolean= false;
  @Input() domainData: any;
  settingsToggle(){
      this.configOpened=!this.configOpened
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['domainData'] && changes['domainData'].currentValue) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
