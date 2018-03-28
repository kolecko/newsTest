// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  fireBaseConfig: {
    apiKey: 'AIzaSyAJdt9ZFy90JY3aWFPaatNwqZlhWGZwT8M',
    authDomain: 'newstest-ecf16.firebaseapp.com',
    databaseURL: 'https://newstest-ecf16.firebaseio.com',
    projectId: 'newstest-ecf16',
    storageBucket: 'newstest-ecf16.appspot.com',
    messagingSenderId: '846477957720'
  }
};
