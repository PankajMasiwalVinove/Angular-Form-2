import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  // {path:'' , component:AppComponent , pathMatch:'full'},
  { path: 'template', component: TemplateComponent },
  {
    path: 'reactive', component: ReactiveComponent,
    children: [
      { path: 'formControl', component: FormControlComponent },
      { path: 'formgroup', component: FormGroupComponent },
      { path: 'formbuilder', component: FormBuilderComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
