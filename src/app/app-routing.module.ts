import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './container/group/group.component';
import { IndexComponent } from './container/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
