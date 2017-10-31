import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Route
import { APP_ROUTING } from './app.routes';

// Services
import { RegistryService } from './services/registry.service';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';
import { PersonaComponent } from './component/persona/persona.component';
import { RegistryComponent } from './component/registry/registry.component';
import { DataComponent } from './component/data/data.component';
import { TemplateComponent } from './component/template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RegistryComponent,
    KeysPipe,
    DataComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    ReactiveFormsModule
  ],
  providers: [
    RegistryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
