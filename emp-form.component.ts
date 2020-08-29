import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showvalue(empForm: NgForm){

    alert(empForm.value.empname)
  }
  
}
