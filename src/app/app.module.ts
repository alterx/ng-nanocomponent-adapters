import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { Button } from '../nanocomponent/component';

import * as toAngular from 'nanocomponent-adapters/angular';
import * as toCustomElementV0 from 'nanocomponent-adapters/custom-element-v0';
import * as toCustomElementV1 from 'nanocomponent-adapters/custom-element-v1';

const component: any = toAngular(Button, 'app-component-sample', ['color']);
const component2: any = toCustomElementV0(Button, ['color']);
const component3: any = toCustomElementV1(Button, ['color']);

(<any>document).registerElement('app-component-sample2', component2);
(<any>window).customElements.define('app-component-sample3', component3);

@NgModule({
  declarations: [
    AppComponent,
    component
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

