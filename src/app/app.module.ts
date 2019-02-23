import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCardComponent } from './artilce-card/artilce-card.component';
import { MatInputModule, MatButtonModule, MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { UserIComponent } from './user-i/user-i.component';
import { ResultsactivateComponent } from './resultsactivate/resultsactivate.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImagesComponent } from './images/images.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    ArticleComponent,
    ArticleCardComponent,
    UserIComponent,
    ResultsactivateComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [UserIComponent, ImagesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
