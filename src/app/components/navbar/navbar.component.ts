import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar-comp',
  templateUrl: './navbar.component.html',
//  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() projectName:string;
}
