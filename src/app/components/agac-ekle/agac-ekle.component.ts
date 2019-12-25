import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Api2Service } from './../../shared/api2.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-agac-ekle',
  templateUrl: './agac-ekle.component.html',
  styleUrls: ['./agac-ekle.component.css']
})
export class AgacEkleComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', {static: false}) chipList;
  @ViewChild('resetStudentForm', {static: false}) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  studentForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  
  ngOnInit() {
    this.submitBookForm();
  }

  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private studentApi: Api2Service
  ) { }

  

  /* Reactive book form */
  submitBookForm() {
    this.studentForm = this.fb.group({
      agac_turu: ['', [Validators.required]],
      agac_kalitesi: ['', [Validators.required]],
      agac_kalinligi: ['', [Validators.required]],
      agac_eni: ['', [Validators.required]],
      agac_boyu: ['', [Validators.required]],
      subjects: [this.subjectArray],
      kayit_tarihi: ['', [Validators.required]],
    })
    
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }  

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.studentForm.get('kayit_tarihi').setValue(convertDate, {
      onlyself: true
    })
  }  

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitStudentForm() {
    console.log(this.studentForm)
    if (this.studentForm.valid) {
      this.studentApi.AddMP(this.studentForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
      });
    }
  }

}
