import { Component, OnInit, ChangeDetectorRef, HostListener, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DashboardService, AclService } from 'src/app/services';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BREADS } from 'src/app/breads';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'empty-route',
	templateUrl: 'empty-route.component.html',
	styleUrls: ['./empty-route.component.css']
})

export class EmptyRouteComponent implements OnInit {
	section = "login";
	isLoggedIn = true;
	model = {
		email: '',
		password: ''
	}
	loginWaiting = false
	/////////////////
	selectedBreads;
	breads = BREADS;
	/////////////////
	user;
	/////////////////
	constructor(
		public router: Router,
		public dashboardService: DashboardService,
		public cd: ChangeDetectorRef,
		public http: HttpClient,
		public aclService: AclService,
		public toastr: ToastrService,
		public zone: NgZone
	) {
		try { this.user = JSON.parse(localStorage.getItem("_d")).user } catch (err) { this.user = null }
		this.registerEvents()
		this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
			this.getBreads(e.url)
			if (e.url == "/") {
				this.validateRootSection();
			} else {
				let urlParts = this.router.url.split("/");
				if (urlParts.length > 1) {
					this.router.navigate([this.router.url]);
					this.changeSection(urlParts[1]);
				} else {
					this.section = ""
				}
			}
			setTimeout(() => {
				cd.detectChanges();
			}, 0);
		});
		if (this.router.url == "/") {
			this.validateRootSection();
		} else {

			let urlParts = this.router.url.split("/");
			if (urlParts.length > 1) {
				this.router.navigate([this.router.url]);
				this.changeSection(urlParts[1]);
			} else {
				this.section = ""
			}
		}
		setTimeout(() => {
			cd.detectChanges();
		}, 0);
	}
	validateRootSection() {
		this.isLoggedIn = true;//bypassing
		if (this.isLoggedIn) {
			this.changeSection("dashboard");
		} else {
			this.changeSection("login");
		}
	}
	ngOnInit() {
	}
	goHome() {
		this.router.navigate(['/dashboard']);
	}
	ngOnDestroy() {
		// clearInterval(this.interval);
	}
	changeSection(section) {
		this.section = section;
		this.dashboardService.setBreads({ appTitle1: section });
	}
	
	error;
	//////////////////////////////////
	getBreads(url: string) {
		this.selectedBreads = null;
		if (!this.selectedBreads) {
			let b = this.breads.find(b => b.route == url || url.indexOf(b.route) > -1);
			if (b) {
				this.selectedBreads = b.breads;
			} else {
				let b = this.breads.find(b => {
					if (!b.routeNoMatch) return false;
					let find = true;
					let urlParts = url.split("/");
					b.routeNoMatch.forEach(rm => {
						find = rm.match == urlParts[rm.no];
						if (!find) return;
					})
					return find;
				});
				if (b) this.selectedBreads = b.breads;
			}
		}
	}
	navigateToBreadLink(bread) {
		console.log("Acb", bread);
		if (bread.link) {
			if (bread.eventRouteName) {
				document.dispatchEvent(new CustomEvent("project-nav", {
					"detail": { url: bread.link }
				}));
			} else {
				this.router.navigate([bread.link]);
			}
		}
	}
	//////////////////////////////////
	registerEvents() {
		document.addEventListener("nav-route", (e) => {
			if (e['detail'].url) {
				this.zone.run(() => {
					this.router.navigate([e['detail'].url]);
				})
			}
		});
	}
}