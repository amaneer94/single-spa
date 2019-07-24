import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocationStrategy, Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  opened = false;
  isHome = true;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public cd: ChangeDetectorRef,
    private location: LocationStrategy,
  ) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      this.isHome = e.url == '/projects' || e.url == '/';

      setTimeout(() => {
        this.ngZone.run(() => {
          // this.cd.detach();
          // this.cd.reattach()
          // this.cd.detectChanges();
        })
      }, 500);
    });
  }

  ngOnInit() {
  }

}
