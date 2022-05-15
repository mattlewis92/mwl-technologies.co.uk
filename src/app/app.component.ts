import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuVisible = false;

  readonly email = 'mailto:website@mwl-technologies.co.uk';

  readonly year = new Date().getFullYear()

  closeMenu(): void {
    this.isMenuVisible = false;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
