import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  constructor(private router: Router){}

  redirect(){
    this.router.navigate(['/creation'])
  }
}
