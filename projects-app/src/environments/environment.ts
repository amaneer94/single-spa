// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:10012/api/v1',
  logsApiUrl: 'http://localhost:10002/api/v1',
  aclApiUrl: 'http://localhost:10003/api/v1',
  teamApiUrl: 'http://localhost:10004/api/v1',
  apiUrlDoc: 'http://localhost:10006/api/v1',
  employeesUrl: 'http://localhost:10000/api/v1',
  apiUrlClients: 'http://localhost:10010/api/v1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
