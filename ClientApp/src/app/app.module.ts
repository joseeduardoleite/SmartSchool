import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TituloComponent } from './titulo/titulo.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      AlunosComponent,
      ProfessoresComponent,
      PerfilComponent,
      DashboardComponent,
      TituloComponent
   ],
   imports: [
      BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
         { path: '', component: DashboardComponent, pathMatch: 'full' },
         { path: 'alunos', component: AlunosComponent },
         { path: 'professores', component: ProfessoresComponent },
         { path: 'perfil', component: PerfilComponent },
         { path: 'dashboard', component: DashboardComponent }
      ])
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
