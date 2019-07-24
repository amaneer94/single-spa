import { environment } from 'src/environments/environment';

export class AppSettings {
    public static get API_ENDPOINT(): string {
        return environment.apiUrl;
    }
    public static get LOGS_API_ENDPOINT(): string {
        return environment.logsApiUrl;
    }
    public static get ACL_API_ENDPOINT(): string {
        return environment.aclApiUrl;
    }
    public static get TEAM_API_ENDPOINT(): string {
        return environment.teamApiUrl;
    }
    public static get API_ENDPOINT_DOC(): string {
        return environment.apiUrlDoc;
    }
    public static get API_ENDPOINT_EMPLOYEES(): string {
        return environment.employeesUrl;
    }

    public static get API_ENDPOINT_CLIENTS(): string {
        return environment.apiUrlClients;
    }
}