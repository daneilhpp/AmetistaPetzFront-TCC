import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMesageFormComponent } from './error-mesage-form/error-mesage-form.component';



@NgModule({
  declarations: [
    ErrorMesageFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule, ErrorMesageFormComponent]
})
export class SharedModule { }
