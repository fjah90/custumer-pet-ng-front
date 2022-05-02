import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { CustumerService } from '../../custumers/custumers.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Custumer } from 'src/app/custumers/custumers.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreatePetsComponent implements OnInit {

  form!: FormGroup;
  custumerList: Custumer[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petsService: PetService,
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
      custumerId: new FormControl('', [Validators.required]),
      chipNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      species: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      photoURL: new FormControl('', [Validators.required]),
    });
    this.custumersService.getAll().subscribe((data: Custumer[]) => {
      this.custumerList = data;
      console.log(this.custumerList);
    })
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
  changeCustumer(e:any) {
    console.log(e.target.value);
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.petsService.create(this.form.value).subscribe((res: any) => {
      console.log('Pet created successfully!');
      this.router.navigateByUrl('pets/index');
    })
  }

}