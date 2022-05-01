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

  /*------------------------------------------
  --------------------------------------------
  Created constructor
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
    this.id = this.route.snapshot.params['id'];
    this.custumersService.find(this.id).subscribe((data: Custumer) => {
      this.custumers = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
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