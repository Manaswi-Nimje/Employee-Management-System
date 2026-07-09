import { Component, OnInit, ChangeDetectorRef } from '@angular/core';  // ← ChangeDetectorRef add kar
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Studentservice } from '../studentservice';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {

  isDirectProfile = false;
  searchText = '';
  student: any = null;
  allStudents: any[] = [];
  notFound = false;

  constructor(
    private ser: Studentservice,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      this.student = null;
      this.searchText = '';
      this.notFound = false;

      if (id) {
        this.isDirectProfile = true;

        this.ser.getStudents().subscribe({
          next: (data: any) => {
            this.allStudents = data;
            this.student = this.allStudents.find(
              (s: any) => String(s.id) === String(id)
            ) || null;
            if (!this.student) {
              this.notFound = true;
            }
            this.cdr.detectChanges();   // ← yeh line add kar
          },
          error: (err) => {
            console.log('HTTP ERROR:', err);
          }
        });

      } else {
        this.isDirectProfile = false;

        this.ser.getStudents().subscribe({
          next: (data: any) => {
            this.allStudents = data;
            this.cdr.detectChanges();   // ← yeh line bhi add kar
          },
          error: (err) => {
            console.log('HTTP ERROR:', err);
          }
        });
      }

    });
  }

  searchStudent() {
    this.notFound = false;
    this.student = this.allStudents.find(
      (s: any) =>
        String(s.id) === String(this.searchText) ||
        s.studname.toLowerCase() === this.searchText.toLowerCase()
    ) || null;
    if (!this.student) {
      this.notFound = true;
    }
    this.cdr.detectChanges();   
  }

  goBack() {
    this.router.navigate(['/dashboard/students']);
  }
}