import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';

const routes: Routes = [{
  path:'',
  component: BestsellersComponent,
  title: 'Home'
},
{
  path:'books',
  component: BookListComponent,
  title: 'Books'
},
{
  path:'book-details/:id',
  component: BookDetailsComponent,
  title: 'Book Details'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
