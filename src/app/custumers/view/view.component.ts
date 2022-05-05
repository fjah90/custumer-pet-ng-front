import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustumerService } from '../custumers.service';
import { Custumer } from '../custumers.interface';
import { PetService } from '../../pets/pets.service';
import { Pet } from '../../pets/pets.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewCustumersComponent implements OnInit {

  id!: string;
  custumer!: Custumer;
  pets!: Pet[];
  test!: boolean;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petService: PetService,
    public custumerService: CustumerService,
    private route: ActivatedRoute,
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];

    this.custumerService.find(this.id).subscribe((data: Custumer) => {
      this.custumer = data;
      console.log(this.custumer)
    });

    this.custumerService.getAllPets(this.id).subscribe((data: Pet[]) => {
      this.pets = data;
      this.test = (this.pets && (Object.keys(this.pets).length === 0));
    });
  }
  /**
    * Write code on Method
    *
    * @return response()
    */
  isEmptyObject(obj: Pet[]) {
    return (obj && (Object.keys(obj).length === 0));
  }
  /**
    * Write code on Method
    *
    * @return response()
    */
  deletePet(_id: string) {
    this.petService.delete(_id).subscribe(res => {
      this.pets = this.pets.filter(item => item._id !== _id);
      console.log('Pet deleted successfully!');
    })
  }
}