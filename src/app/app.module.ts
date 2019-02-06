import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EtatCivilService } from './services/etats-civils-service';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';

@NgModule({
  declarations: [
    AppComponent,
    SortableColumnComponent
  ],
  imports: [
    BrowserModule,
    // HttpClient, 
    HttpClientModule
  ],
  providers: [EtatCivilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
