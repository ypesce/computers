import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComputersComponent } from './components/computers/computers.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ComputersComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
