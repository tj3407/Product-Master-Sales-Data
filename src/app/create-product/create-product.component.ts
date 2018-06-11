import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Master } from '../master';
import { Sales } from '../sales';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newMaster: Master = new Master();
  newSales: Sales = new Sales();
  id: number;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    const { value, valid } = form;
    console.log('submitting form ', form.value);
    this.id = form.value['newMaster.ProductId'];

    this.dataService.createSales(this.newSales, this.id).subscribe(sales => {
      console.log(sales);
      this.newSales = new Sales();
    });

    this.dataService.createRecord(this.newMaster).subscribe(record => {
      this.router.navigateByUrl('/');
      this.newMaster = new Master();
      form.reset();
    });
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }

}
