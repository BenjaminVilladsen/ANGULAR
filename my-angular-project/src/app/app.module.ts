import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TpiDetailsComponent } from './tpi-details/tpi-details.component';
import { ItemCreationFormComponent } from './item-creation-form/item-creation-form.component';
import { GetPartsComponent } from './get-parts/get-parts.component';
import { SpecTileComponent } from './spec-tile/spec-tile.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TpiDetailsComponent,
    ItemCreationFormComponent,
    GetPartsComponent,
    SpecTileComponent,
    PopUpComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
