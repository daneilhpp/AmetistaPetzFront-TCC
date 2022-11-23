import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnSearch(){
   // console.log(this.value);
  }

}
