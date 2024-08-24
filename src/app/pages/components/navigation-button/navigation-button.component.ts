import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [RouterModule, NgIf, NgClass],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.css'
})
export class NavigationButtonComponent {
  @Input() link : any;
  @Input() title : any;
  @Input() class : any;
  getCustomsClass() : string{
    if(this.class != '' && this.class){
      return this.class;
    }else{
      return '';
    }
  }
}
