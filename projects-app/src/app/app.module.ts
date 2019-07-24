import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { materialModule } from './material-module';
import {
  AppComponent,
  LayoutComponent,
  ProjectAddComponent,
  ProjectHomeComponent,
} from './components/index';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProjectAddComponent,
    LayoutComponent,
    ProjectHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    materialModule,
    HttpModule,
    ToastrModule.forRoot(),
    FileUploadModule
  ],
  entryComponents: [
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
