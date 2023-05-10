import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NeweduComponent } from './components/educacion/newedu.component';
import { EditeduComponent } from './components/educacion/editedu.component';
import { NewskiComponent } from './components/skills/newski.component';
import { EditskiComponent } from './components/skills/editski.component';
import { EditaboutComponent } from './components/about/editabout.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditexpComponent } from './components/experience/editexp.component';
import { NewexpComponent } from './components/experience/newexp.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path:'login', component: LoginComponent},
  {path:'newedu', component: NeweduComponent},
  {path:'editedu/:id', component: EditeduComponent},
  {path:'newskill', component: NewskiComponent},
  {path:'editski/:id', component: EditskiComponent},
  {path:'editabout/:id', component: EditaboutComponent},
  {path:'editexp/:id', component: EditexpComponent},
  {path:'newexp', component: NewexpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
