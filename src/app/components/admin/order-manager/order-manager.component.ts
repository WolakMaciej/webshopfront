import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {


  public orderTable: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void{
    this.orderService.getOrders().subscribe((response: Order[]) => {
      this.orderTable = response;
      console.log(this.orderTable);
    });
  }


}
