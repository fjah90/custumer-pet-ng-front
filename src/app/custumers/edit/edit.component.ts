import { Component, OnInit } from '@angular/core';
import { CustumerService } from '../custumers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Custumer } from '../custumers.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditCustumersComponent implements OnInit {

  id!: string;
  custumers!: Custumer;
  form!: FormGroup;
  dni!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  note!: string;


  /*------------------------------------------
  --------------------------------------------
  Constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public custumersService: CustumerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.custumers = {} as Custumer;
    this.id = this.route.snapshot.params['_id'];
    this.custumersService.find(this.id).subscribe((data: Custumer) => {
      this.custumers = data;

      let setDefaults = {
        dni: this.custumers.dni,
        firstName: this.custumers.firstName,
        lastName: this.custumers.lastName,
        phoneNumber: this.custumers.phoneNumber,
        email: this.custumers.email,
        note: this.custumers.note,
      };
      this.form.setValue(setDefaults);
    });

    this.form = new FormGroup({
      dni: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
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
    this.custumersService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Custumer updated successfully!');
      this.router.navigateByUrl('custumers/index');
    })
  }

}