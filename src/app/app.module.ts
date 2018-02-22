import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeaderNarrowComponent } from './header-narrow/header-narrow.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BrowseComponent } from './browse/browse.component';
import { PlatformSelectComponent } from './platform-select/platform-select.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { BrowseFormComponent } from './browse-form/browse-form.component';

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
    BrowseComponent,
    PlatformSelectComponent,
    PaginationComponent,
    ModalComponent,
    BrowseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VehicleService
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
