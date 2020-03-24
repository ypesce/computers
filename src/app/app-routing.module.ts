import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputersComponent } from './components/computers/computers.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/computers', pathMatch: 'full' },
  { path: 'computers', component: ComputersComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  // { path: 'chaussure/:id', component: ChaussureDetailComponent },
  { path: '**', component: Error404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
