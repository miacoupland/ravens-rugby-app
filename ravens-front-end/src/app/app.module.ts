import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpFormComponent } from './presentation/sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './presentation/header/header.component';
import { FooterComponent } from './presentation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
