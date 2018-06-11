import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/add/operator/switchMap';
import { Sales } from '../sales';
import { Master } from '../master';

@Component({
  selector: 'app-product-sales-data',
  templateUrl: './product-sales-data.component.html',
  styleUrls: ['./product-sales-data.component.css']
})
export class ProductSalesDataComponent implements OnInit {
  id: number;
  @Input() album: Master;
  @Input() record: Sales;
  errorMessage: string;
  constructor(private dataService: DataService, private _route: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap(params => this.dataService.getRecord(parseInt(params.get('id'), 10)))
    .subscribe(
      album => {
        console.log('got record', album);
        this.album = album;
      },
      error => {
        console.log('got an error');
        console.log(error);
        this.errorMessage = error.statusText;

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    );

    this.route.paramMap
    .switchMap(params => this.dataService.getSales(parseInt(params.get('id'), 10)))
    .subscribe(
      record => {
        console.log('got record', record);
        this.record = record;
      },
      error => {
        console.log('got an error');
        console.log(error);
        this.errorMessage = error.statusText;

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    );
  }

  onDelete(id) {
    console.log('delete sales data', id);
    console.log(typeof(id));
    this.dataService.deleteSales(id).subscribe(returnedRecord => {
      console.log(returnedRecord);
      this.dataService.getRecords();
      this._route.navigateByUrl('/');
    });
  }

}
