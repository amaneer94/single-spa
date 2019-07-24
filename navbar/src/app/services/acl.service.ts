import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AppSettings } from '../app.settings';
import { map } from 'rxjs/operators';
import { Encrytojs } from '../common/crypto';
import { PermissionModel, RoleModel } from '../models';

@Injectable({
    providedIn: 'root'
})
export class AclService {

    constructor(
        public http: AuthService,
    ) {
    }

    getAndSavePermissions(roleId, userId?) {
        return this.http.get(`${AppSettings.ACL_API_URL}/project-roles/role/${roleId}`).pipe(
            map((res: any) => {
                res.userId = userId;
                localStorage.setItem("_sec", Encrytojs.encrypt(JSON.stringify(res)));
                return res;
            })
        )
    }

    getMyPermissions(): PermissionModel[] {
        try { return (JSON.parse(Encrytojs.decrypt(localStorage.getItem("_sec")))).permissions; } catch (err) { return [] }
    }


    //////////////////////////////////////////////////////////////////////////////////////////
    getAndSaveProjectPermissions(userId) {
        return this.http.get(`${AppSettings.TEAM_API_URL}/project-acl`).pipe(
            map((res: any) => {
                res.userId = userId;
                localStorage.setItem("_psec", Encrytojs.encrypt(JSON.stringify(res)));
                return res;
            })
        )
    }
    getMyProjectPermissions(): RoleModel[] {
        try { return (JSON.parse(Encrytojs.decrypt(localStorage.getItem("_psec")))); } catch (err) { return [] }
    }
    //////////////////////////////////////////////////////////////////////////////////////////

    allow(permission): boolean {
        return true;
        //return !!this.getMyPermissions().find(perm => perm.module == permission || perm.code == permission);
    }

    allowProject(projectId, permission): boolean {
        let projectPermissions = this.getMyProjectPermissions().find(p => p.model._id == projectId);
        if(!projectPermissions) return false;
        return !!projectPermissions.permissions.find(perm => perm.module == permission || perm.code == permission);
    }
}