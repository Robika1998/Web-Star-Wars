import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface RoutebuttonI {
  title: string;
  link: string;
}

@Component({
  selector: 'app-router-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './router-button.component.html',
  styleUrl: './router-button.component.scss'
})
export class RouterButtonComponent {
 
  @Input() options!: RoutebuttonI



}
