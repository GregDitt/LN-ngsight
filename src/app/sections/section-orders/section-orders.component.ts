import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

 orders: Order[] =[
   
   {id: 1, customer: { id:1, name: 'A', state: 'C0',email: 'mainstate@exaple.com'}, 
   total:230,placed:new Date(2020,5,21), fulfilled: new Date(2020,5,21)},
   {id: 2, customer: { id:2, name: 'B', state: 'C0',email: 'mainstate@exaple.com'},
    total:230,placed:new Date(2020,5,21), fulfilled: new Date(2020,5,21) },
   {id: 3, customer: { id:3, name: 'C', state: 'C0',email: 'mainstate@exaple.com'}, 
   total:230,placed:new Date(2020,5,21), fulfilled: new Date(2020,5,21)},
   {id: 4, customer: { id:4, name: 'D', state: 'C0',email: 'mainstate@exaple.com'}, 
   total:230,placed:new Date(2020,5,21), fulfilled: new Date(2020,5,21) },
   {id: 5, customer: { id:5, name: 'E', state: 'C0',email: 'mainstate@exaple.com'},
    total:230,placed:new Date(2020,5,21), fulfilled: new Date(2020,5,21) },
    

  ];

  ngOnInit(): void {
  }

}
