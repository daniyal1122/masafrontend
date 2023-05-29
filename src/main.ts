import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
<<<<<<< HEAD
  // enableProdMode();
=======
  enableProdMode();
>>>>>>> ed7d4e9eade1c34b7d004d7cc37cb28b81ededb7
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
