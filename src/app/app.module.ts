import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroService } from './shared/hero.service'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        AppComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
