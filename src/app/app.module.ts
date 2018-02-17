import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeaderNarrowComponent } from './header-narrow/header-narrow.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowseComponent } from './browse/browse.component';
import { VehicleService }  from './vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    HeaderBannerComponent,
    FooterComponent,
    ContactComponent,
    TopNavComponent,
    HeaderNarrowComponent,
    TermsComponent,
    PrivacyComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
