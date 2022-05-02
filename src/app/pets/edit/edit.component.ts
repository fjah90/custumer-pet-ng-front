import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pets.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustumerService } from '../../custumers/custumers.service';
import { Custumer } from '../../custumers/custumers.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditPetsComponent implements OnInit {

  id!: string;
  pet!: Pet;
  form!: FormGroup;
  custumerList!: Custumer[];
  selectedValue!: string;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petsService: PetService,
    private route: ActivatedRoute,
    public custumerService: CustumerService,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
    this.petsService.find(this.id).subscribe((data: Pet) => {
      console.log(data);
      this.pet = data;
    });
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
    this.custumerService.find(this.pet.custumerId).subscribe((data: Custumer) => {
      this.selectedValue = data._id;
      console.log(this.selectedValue)
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
  onCustumerChanged(value: any) {
    console.log('onCustumerChanged')
    console.log(value)
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.petsService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Pet updated successfully!');
      this.router.navigateByUrl('pets/index');
    })
  }

}