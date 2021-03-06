// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_taiga_url: 'https://api.taiga.io/api/v1',
  api_zoho_url: 'https://projectsapi.zoho.com/restapi',
  api_project_management: 'http://localhost:8000/api/v1'
};
