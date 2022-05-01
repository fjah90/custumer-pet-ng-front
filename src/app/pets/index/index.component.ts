import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Pet } from '../pets.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexPetsComponent implements OnInit {

  pets: Pet[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public custumerService: PetService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.custumerService.getAll().subscribe((data: Pet[]) => {
      this.pets = data;
      console.log(this.pets);
    })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePet(id: string) {
    this.custumerService.delete(id).subscribe(res => {
      this.pets = this.pets.filter(item => item.id !== id);
      console.log('Pet deleted successfully!');
    })
  }

}