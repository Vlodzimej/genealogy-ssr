import 'hammerjs';
import { StaticProvider, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// export function getBaseUrl() {
//   return document.getElementsByTagName('base')[0].href;
// }

// const providers = [
//   { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
//   { provide: 'MESSAGE', useValue: 'Message from the client' }
// ];

// if (environment.production) {
//   enableProdMode();
// }

// document.addEventListener('DOMContentLoaded', () => {
//   platformBrowserDynamic(providers).bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// });
if (environment.production) {
	enableProdMode();
}

function bootstrap() {
	const providers: StaticProvider[] = [
   { provide: 'MESSAGE', useValue: 'Message from the client' }
	];

	platformBrowserDynamic(providers).bootstrapModule(AppModule)
		.catch(err => console.error(err));
};


if (document.readyState === 'complete') {
	bootstrap();
} else {
	document.addEventListener('DOMContentLoaded', bootstrap);
}

