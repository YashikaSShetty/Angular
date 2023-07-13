import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Yashika's-Angular-Assignment";
  isFeatureHovered = false;
  onFeatureHover(): void {
    this.isFeatureHovered = true;
  }

  // Function to handle the mouse leave event on the "Feature" menu item
  onFeatureLeave(): void {
    this.isFeatureHovered = false;
  }
}
