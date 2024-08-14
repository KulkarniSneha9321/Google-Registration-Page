import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import { NgModule } from '@angular/core';

interface gender{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  // imports:[FormsModule,MatFormFieldModule],
})
export class BasicInfoComponent {
  name: any;
genders: any;
  constructor(){ }
  ngOnInit():void{
    
  }


}
