import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public baseUrl = '';
    public token: String = '';
    public headers;

    constructor(private http: HttpClient,
        public router: Router,
        public toastr: ToastrService
    ) {
        // this.baseUrl = AppSettings.API_ENDPOINT;
    }

    getCashedUser() {
        try { return (JSON.parse(localStorage.getItem('_d'))).user; } catch (err) { return null }
    }

    get(url, noBase?, options?) {
        return this.http.get(url, { headers: this.jwt() })
        // .catch((err: any) => {
        //     this.handleError(err, url, options);
        //     return Observable.throw(err);
        // });
    }

    post(url: string, body: any, options?) {
        return this.http.post(url, body, { headers: this.jwt(options) })
        // .catch((err: any) => {
        //     this.handleError(err, url, options);
        //     return Observable.throw(err);
        // });
    }

    put(url: string, body: any) {
        return this.http.put(url, body, { headers: this.jwt() })
        // .catch((err: any) => {
        //     this.handleError(err, url);
        //     return Observable.throw(err);
        // });
    }

    patch(url: string, body: any) {
        return this.http.patch(url, body, { headers: this.jwt() })
        // .catch((err: any) => {
        //     this.handleError(err, url);
        //     return Observable.throw(err);
        // });
    }

    delete(url: string, body?: any) {
        return this.http.delete(url, { headers: this.jwt() })
        // .catch((err: any) => {
        //     this.handleError(err, url);
        //     return Observable.throw(err);
        // });
    }

    deleteBulk(url: string, body: any) {
        return this.http.request('DELETE', url, { headers: this.jwt(), body: body })
        // .catch((err: any) => {
        //     this.handleError(err, url);
        //     return Observable.throw(err);
        // });
    }
    public jwt(options?) {
        this.token = localStorage.getItem('_t');
        if (!this.token) {
            if (!options || !options.ignoreLogout) {
                localStorage.setItem("rAlogin", this.router.url);
                this.logOut();
            }
            return null;
        } else {
            this.token = localStorage.getItem('_t');
            this.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'apikey': `${this.token}`
            });
            return this.headers;
        }
    }
    handleError(err, url, options?) {

        if (err.status == 401 || err.status == 402) {

            if (!options || !options.ignoreToast) {
                this.toastr.clear();
                this.toastr.error(
                    err && err.error && err.error.message ? err.error.message : err.statusText,
                    url == "users/login" ? "Login Failed" : "Session Timed Out",
                    { disableTimeOut: true }
                );
            }
            localStorage.setItem("rAlogin", this.router.url);
            this.logOut(err, url);
        } else if (err.status == 0) {
            if (!options || !options.ignoreToast) {
                this.toastr.info(
                    "Something went wrong!",
                    "Please try again later",
                    { timeOut: 3000 }
                );
            }
        } else if (err.status == 403) {
            if (!options || !options.ignoreToast) {
                this.toastr.clear();
                this.toastr.error(
                    err.error.message,
                    "Permission Denied",
                    { disableTimeOut: true }
                );
            }
        }

    }
    logOut(err?, url?) {
        localStorage.removeItem('_t');
        localStorage.removeItem('email');
        localStorage.removeItem('_sec');
        localStorage.removeItem('_psec');
        localStorage.removeItem('_vtsec');
        localStorage.removeItem('avatar');
        // Cookie.deleteAll();
        // this.dialogRef.closeAll();
        // this.router.navigate(['/login']);
    }

}
