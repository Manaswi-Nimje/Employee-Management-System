import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Studentservice } from '../studentservice';

@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addstudent.html',
  styleUrls: ['./addstudent.css']
})
export class AddstudentComponent {

  constructor(private ser:Studentservice){}

  studentForm=new FormGroup({
    id:new FormControl('',Validators.required),

    studname:new FormControl('',Validators.required),

    course:new FormControl('',Validators.required),

    marks:new FormControl('',Validators.required),

    admissionDate:new FormControl('',Validators.required)

  });

  addStudent(){

    if(this.studentForm.valid){

      this.ser.addStudent(this.studentForm.value).subscribe({

        next:(res)=>{

          console.log(res);

          alert("Student Added Successfully");

          this.studentForm.reset();

        },

        error:(err)=>{

          console.log(err);

        }

      });

    }

  }

}