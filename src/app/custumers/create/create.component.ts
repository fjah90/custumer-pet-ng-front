import { Component, OnInit } from '@angular/core';
import { CustumerService } from '../custumers.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateCustumersComponent implements OnInit {

  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public custumersService: CustumerService,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      dni: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.custumersService.create(this.form.value).subscribe((res: any) => {
      console.log('Custumer created successfully!');
      this.router.navigateByUrl('custumers/index');
    })
  }

}