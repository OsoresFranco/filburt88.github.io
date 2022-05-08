import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { MessageFormService } from 'src/app/services/message-form.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  

  constructor(private http:MessageFormService, private _snackBar:MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
    });
  }
  
  form: FormGroup;

  send(){
    if(this.form.valid){
      this.http.sendForm(this.form.get('name')?.value, this.form.get('email')?.value, this.form.get('message')?.value).subscribe(data=>{
        console.log(data);
      })
      this.openSnackBar();
    }
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.minLength(15), Validators.required]),
    });
  }

}
