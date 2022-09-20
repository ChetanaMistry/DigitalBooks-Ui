import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAvbarComponent } from './Components/navbar/navbar.component';
import { BooksComponent } from './Components/books/books.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { AboutComponent } from './Components/about/about.component';
import { CreatebookComponent } from './Components/createbook/createbook.component';
import { SearchbookComponent } from './Components/searchbook/searchbook.component';

@NgModule({
  declarations: [
    AppComponent,
    NAvbarComponent,
    BooksComponent,
    AuthorsComponent,
    AboutComponent,
    CreatebookComponent,
    SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
