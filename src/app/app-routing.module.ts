import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputersComponent } from './components/computers/computers.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/computers', pathMatch: 'full' },
  { path: 'computers', component: ComputersComponent },
  // { path: 'add', component: AddChaussureComponent },
  { path: 'edit/:id', component: EditComponent },
  // { path: 'chaussure/:id', component: ChaussureDetailComponent },
  // { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
