import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(
        public router: Router,
        public http: HttpClient
    ) {
    }
    appTitle1 = "Login 1";
    

    setBreads(config) {
        this.appTitle1 = config.appTitle1;
    }
}