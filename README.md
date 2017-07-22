A Poc Writing data onto googlemaps using angular4

The google apikey is not included in git source control.
The code expects a file '/src/environments/environment.ts' to be present, containing:

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apikey: 'your_api_key'
};
