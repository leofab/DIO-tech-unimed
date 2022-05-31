import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTablesComponent } from './components/edit-tables/edit-tables.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo:'users', pathMatch: 'full'
  },
  {
    path: 'users', component: HomeComponent
  },
  {
    path:  'users/edit/:position', component: EditTablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
