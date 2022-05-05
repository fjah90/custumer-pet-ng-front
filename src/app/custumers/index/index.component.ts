import { Component, OnInit } from '@angular/core';
import { CustumerService } from '../custumers.service';
import { Custumer } from '../custumers.interface';
import { NotificationService } from '../../common/notification.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexCustumersComponent implements OnInit {

  custumers: Custumer[] = [];
  validation: boolean = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public custumerService: CustumerService,
    private notifyService: NotificationService
  ) { }

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
  async deleteCustumer(id: string) {
    console.log(id);
    this.custumerService.getAllPets(id).subscribe(response => {
      console.log(response);
      if (response.length === 0) {
          this.custumerService.delete(id).subscribe(res => {
            this.custumers = this.custumers.filter(item => item._id !== id,);
            console.log(this.custumers);
            console.log('Custumer deleted successfully!');
          })
        } else {
          this.notifyService.showError("Something is wrong can't delete this custumer", "Oops something happened")
        }
    });
  }

}