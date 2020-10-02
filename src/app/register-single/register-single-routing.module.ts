import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSingleComponent } from './register-single.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterSingleRoutingModule { }
