import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule],
  declarations: []
})
export class MaterialModule { }
