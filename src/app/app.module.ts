import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MetacritcComponent } from './components/metacritc/metacritc.component';
import { DetailsComponent } from './components/details/details.component';
import { BrDatePipePipe } from './pipes/br-date-pipe.pipe';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { StoreButtonsComponent } from './components/store-buttons/store-buttons.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    GameCardComponent,
    MetacritcComponent,
    DetailsComponent,
    BrDatePipePipe,
    GameTabsComponent,
    GameInfoComponent,
    StoreButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSlideToggleModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
