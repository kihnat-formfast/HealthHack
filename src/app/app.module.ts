import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { HomeComponent } from './home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { ModulesComponent } from './modules/modules.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { BadgesComponent } from './badges/badges.component';

const appRoutes: Routes = [
  {
    path: 'homes',
    component: HomeComponent,
    data: {title: 'Home Page'}
  },
  {
    path: 'modules',
    component: ModulesComponent,
    data: {title: 'Modules Page'}
  },
  {
    path: 'task',
    component: TasksComponent,
    data: {title: 'Tasks Page'}
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {title: 'Profile Page'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: "Login Page"}
  },
  {
    path: 'tasks',
    component: TasksComponent,
    data: { title: 'Task List' }
  },
  {
    path: 'badges',
    component: BadgesComponent,
    data: {title: 'Badge List'}
  },
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/homes',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    HomeComponent,
    ModulesComponent,
    TasksComponent,
    ProfileComponent,
    LoginComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
