import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { topBarComponent } from './Header/topBar.component';
import { SideBarComponent } from './Sidebar/sidebar.component';
import { TaskListComponent } from './Screen/taskList.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    topBarComponent,
    SideBarComponent,
    TaskListComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
