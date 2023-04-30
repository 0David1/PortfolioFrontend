import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducacionComponent} from './components/educacion/educacion.component'
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { LoginComponent } from './components/login/login.component';
import { NeweduComponent } from './components/educacion/newedu.component';
import { EditeduComponent } from './components/educacion/editedu.component';
import { NewskiComponent } from './components/skills/newski.component';
import { EditskiComponent } from './components/skills/editski.component';

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'education', component: EducacionComponent},
  {path:'skills', component: SkillsComponent},
  {path:'proyects', component: ProyectsComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaedu', component: NeweduComponent},
  {path:'editedu/:id', component: EditeduComponent},
  {path:'newskill', component: NewskiComponent},
  {path:'editski/:id', component: EditskiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
