import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedValue!: string;
  selectedCar!: string;

//   foods: Food[] = [
//     {value: 'steak-0', viewValue: 'Steak'},
//     {value: 'pizza-1', viewValue: 'Pizza'},
//     {value: 'tacos-2', viewValue: 'Tacos'},
//   ];

//   cars: Car[] = [
//     {value: 'volvo', viewValue: 'Volvo'},
//     {value: 'saab', viewValue: 'Saab'},
//     {value: 'mercedes', viewValue: 'Mercedes'},
//   ];
}