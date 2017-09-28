import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppComponent }           from './app.component';
import { SearchComponent }        from './components/search/search.component';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { AboutComponent }         from './components/about/about.component';

const routes: Routes = [
  {
      path: '',
      component: SearchComponent
  },
  {
      path: 'about',
      component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
