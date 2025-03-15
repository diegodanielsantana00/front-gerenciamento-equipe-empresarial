import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routes';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, // Módulo necessário para aplicações web
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FeaturesModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}