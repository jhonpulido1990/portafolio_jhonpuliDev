import { Component } from '@angular/core';
import { HomeLayoutsComponent } from '../layouts/home-layouts/home-layouts.component';
import { HomeTemplateComponent } from "../../shared/templates/home-template/home-template.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeLayoutsComponent, HomeTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
