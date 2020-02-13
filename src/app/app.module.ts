import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { TabledisplayComponent } from './tabledisplay/tabledisplay.component';
import { SortpipePipe } from './pipes/sortpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodosComponent,
    SearchfilterPipe,
    TabledisplayComponent,
    SortpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
