import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Informes", component: InformesPdfComponent },
  { path: "Equipos", component: EquiposComponent },
  { path: "Login", component: LoginComponent },
  { path: "Subordinados", component: SubordinadosComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
