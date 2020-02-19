import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { TabledisplayComponent } from './tabledisplay/tabledisplay.component';
import { SortpipePipe } from './pipes/sortpipe.pipe';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from './popup/popup.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodosComponent,
    SearchfilterPipe,
    TabledisplayComponent,
    SortpipePipe,
    LoginComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
