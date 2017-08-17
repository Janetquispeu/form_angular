import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from 'app/component/persona/persona.component';
import { RegistryComponent } from 'app/component/registry/registry.component';
import { TemplateComponent } from 'app/component/template/template.component';
import { DataComponent } from 'app/component/data/data.component';

const APP_ROUTES: Routes = [
  { path: 'persona', component: PersonaComponent },
  { path: 'registry/:id', component: RegistryComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'data', component: DataComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
