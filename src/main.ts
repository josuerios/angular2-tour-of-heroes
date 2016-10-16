import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
//noinspection TypeScriptCheckImport
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
    enableProdMode();
}
//noinspection TypeScriptValidateTypes
platformBrowserDynamic().bootstrapModule(AppModule);
