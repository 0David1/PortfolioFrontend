import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './services/interceptor-service';
import { NeweduComponent } from './components/educacion/newedu.component';
import { EditeduComponent } from './components/educacion/editedu.component';
import { EditskiComponent } from './components/skills/editski.component';
import { NewskiComponent } from './components/skills/newski.component';
import { EditaboutComponent } from './components/about/editabout.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditexpComponent } from './components/experience/editexp.component';
import { NewexpComponent } from './components/experience/newexp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectsComponent,
    LoginComponent,
    NeweduComponent,
    EditeduComponent,
    EditskiComponent,
    NewskiComponent,
    EditaboutComponent,
    PortfolioComponent,
    ExperienceComponent,
    EditexpComponent,
    NewexpComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
