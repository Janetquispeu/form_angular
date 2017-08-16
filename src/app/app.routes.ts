import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from 'app/component/persona/persona.component';
import { RegistryComponent } from 'app/component/registry/registry.component';

const APP_ROUTES: Routes = [
  { path: 'persona', component: PersonaComponent },
  { path: 'registry/:id', component: RegistryComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
