import { environment } from 'src/environments/environment';

export class AppSettings {

    public static get LOGIN_API_URL(): string {
        return environment.loginApiUrl;
    }

    public static get ACL_API_URL(): string {
        return environment.aclApiUrl;
    }

    public static get TEAM_API_URL(): string {
        return environment.teamApiUrl;
    }

    public static get API_ENDPOINT_EMPLOYEE_PERSONAL(): string {
        return environment.empPersonalApiUrl;
    }
}