import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Studentservice } from '../studentservice';

@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './studentlist.html',
  styleUrls: ['./studentlist.css']
})

export class StudentlistComponent {

  students:any[]=[];

  constructor(
    private service: Studentservice,
    private router: Router
  ) {}

  ngOnInit(){

    this.service.getStudents().subscribe((data:any)=>{

      this.students = data;

    });

  }

 viewProfile(id:any){

  this.router.navigateByUrl('/profile/' + id);

}

}