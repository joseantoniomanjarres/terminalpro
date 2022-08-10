import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'propietario', redirectTo: 'propietario/index', pathMatch: 'full'},
  { path: 'propietario/index', component: IndexComponent },
  { path: 'propietario/create', component: CreateComponent },
  { path: 'propietario/:idPropietario/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietarioRoutingModule { }
