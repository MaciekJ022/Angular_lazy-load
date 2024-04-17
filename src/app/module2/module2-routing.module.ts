import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgModule2Component } from './img-module2/img-module2.component';
import { Module2Component } from './module2.component';
import { TextModule2Component } from './text-module2/text-module2.component';

const routes: Routes = [
  { path: '', component: Module2Component },
  { path: 'text', component: TextModule2Component },
  { path: 'image', component: ImgModule2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
