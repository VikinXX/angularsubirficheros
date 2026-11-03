import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ServiceUpload } from './services/Service.upload';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error-component/error-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    InformesPdfComponent,
    ErrorComponent,
    EquiposComponent,
    LoginComponent,
    SubordinadosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor])),
    provideToastService(),
    ServiceUpload,
  ],
  bootstrap: [App],
})
export class AppModule {}
