import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeaturesComponent } from './features/features.component';
import { LowerpartComponent } from './lowerpart/lowerpart.component';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    CalculatorComponent,
    FeaturesComponent,
    LowerpartComponent,
    FooterComponent,
    FaqComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
