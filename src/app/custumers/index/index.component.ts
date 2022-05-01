import { Component, OnInit } from '@angular/core';
import { CustumerService } from '../custumers.service';
import { Custumer } from '../custumers.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexCustumersComponent implements OnInit {

  custumers: Custumer[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public custumerService: CustumerService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.custumerService.getAll().subscribe((data: Custumer[]) => {
      this.custumers = data;
      console.log(this.custumers);
    })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteCustumer(id: string) {
    this.custumerService.delete(id).subscribe(res => {
      this.custumers = this.custumers.filter(item => item._id !== id);
      console.log('Custumer deleted successfully!');
    })
  }

}