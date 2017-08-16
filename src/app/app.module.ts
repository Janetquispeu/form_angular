import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Route
import { APP_ROUTING } from './app.routes';

// Services
import { RegistryService } from 'app/services/registry.service';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';
import { PersonaComponent } from './component/persona/persona.component';
import { RegistryComponent } from './component/registry/registry.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RegistryComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    RegistryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
