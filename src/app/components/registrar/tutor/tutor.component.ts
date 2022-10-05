import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Usuario } from 'src/app/usuario'

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  constructor(private service:UserServiceService/*,  private user: Usuario */) { }

   addTutor = new FormGroup( 
    //this.user.name: new FormControl('');
    {
       name: new FormControl(''),
      cpf: new FormControl(''),
      tel: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl(''),
      cep: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      pass2: new FormControl('')       
    });



  ngOnInit(): void {
  }

  SaveData(){
    this.service.saveUser(this.addTutor.value).subscribe((result)=>{
      console.log(result);
    });
  }

}
