import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustumerService } from '../../custumers/custumers.service';
import { Custumer } from '../../custumers/custumers.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreatePetsComponent implements OnInit {

  form!: FormGroup;
  custumerList!: Custumer[];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petsService: PetService,
    public custumerService: CustumerService,
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
    this.custumerService.getAll().subscribe((data: Custumer[]) => {
      this.custumerList = data;
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
  submit() {
    console.log(this.form.value);
    this.petsService.create(this.form.value).subscribe((res: any) => {
      console.log('Pet created successfully!');
      this.router.navigateByUrl('pets/index');
    })
  }

}