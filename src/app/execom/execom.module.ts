import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Execom22Component } from './execom22/execom22.component';
import { ExecomComponent } from './execom/execom.component';
import { Execom21Component } from './execom21/execom21.component';
import { Execom20Component } from './execom20/execom20.component';
import { Execom19Component } from './execom19/execom19.component';
import { Execom18Component } from './execom18/execom18.component';
import { Execom17Component } from './execom17/execom17.component';
import { Execom16Component } from './execom16/execom16.component';
import { Execom15Component } from './execom15/execom15.component';



@NgModule({
  declarations: [
    Execom22Component,
    ExecomComponent,
    Execom21Component,
    Execom20Component,
    Execom19Component,
    Execom18Component,
    Execom17Component,
    Execom16Component,
    Execom15Component,
  ],
  exports: [
    Execom22Component,
    Execom21Component,
    Execom20Component,
    Execom19Component,
    Execom18Component,
    Execom17Component,
    Execom16Component,
    Execom15Component,
  ],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class ExecomModule { }
