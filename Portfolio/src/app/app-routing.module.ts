import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent} from './components/education/education.component'
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'',redirectTo: '', pathMatch: 'full', component: AboutComponent},
  {path:'education', component: EducationComponent},
  {path:'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
