import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { BooksComponent } from './Components/books/books.component';
import { CreatebookComponent } from './Components/createbook/createbook.component';

const routes: Routes = [{path:"about", component:AboutComponent},
                        {path:"books", component:BooksComponent},
                        {path:"authors", component:AuthorsComponent},
                        {path:"createbook", component:CreatebookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
