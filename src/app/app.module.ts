import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { DndModule } from 'ng2-dnd';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { FilterPipe } from './pipes/filter.pipe';

import { CharactersListService } from './services/characters-list.service';

const appRoutes: Routes = [
  { path: '', component: CharactersListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    OrderModule,
    DndModule.forRoot(),
    FilterPipeModule
  ],
  providers: [
    CharactersListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
