import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pms';

  constructor(private router: Router) {
    this.registerEvents();
  }

  registerEvents() {
    
    document.addEventListener("project-nav", (e) => {
      if (e['detail'].url) {
        this.router.navigate([e['detail'].url])
      }
    });
  }
}
