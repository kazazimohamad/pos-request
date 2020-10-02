import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import {AccordionModule} from 'primeng/accordion';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ModelPoseComponent } from './model-pose/model-pose.component';
import {CarouselModule} from 'primeng/carousel';
import { RegisterSingleComponent } from './register-single/register-single.component';
import { RegisterGroupComponent } from './register-group/register-group.component';


@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterSingleComponent,
    RegisterGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CarouselModule,
   AccordionModule,
  ],
  exports: [
   // AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
