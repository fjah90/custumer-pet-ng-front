import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pets.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewPetsComponent implements OnInit {

  _id!: string;
  pet!: Pet;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petService: PetService,
    private route: ActivatedRoute,
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.petService.find(this._id).subscribe((data: Pet) => {
      this.pet = data;
    });
  }

}