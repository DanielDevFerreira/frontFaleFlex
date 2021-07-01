import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUserForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpfcnpj: ['', Validators.required]
    })
  }

  get f(){ return this.createUserForm.controls; }

  onSubmit(){
    this.submitted = true;
  }

}
