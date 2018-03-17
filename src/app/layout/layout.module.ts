import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { HeaderNarrowComponent } from './header-narrow/header-narrow.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsComponent } from '../terms/terms.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    RecaptchaModule
  ],
  declarations: [HeaderBannerComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent,
    AboutComponent, ContactComponent, PrivacyComponent, TermsComponent],
  exports: [HeaderBannerComponent, HeaderNarrowComponent, FooterComponent, TopNavComponent ]
})
export class LayoutModule { }
