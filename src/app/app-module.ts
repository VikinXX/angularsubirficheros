import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { ServiceUpload } from './services/Service.upload';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceUpload],
  bootstrap: [App],
})
export class AppModule {}
