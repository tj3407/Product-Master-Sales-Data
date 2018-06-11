import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Master } from '../master';
import { Sales } from '../sales';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-master-data',
  templateUrl: './list-master-data.component.html',
  styleUrls: ['./list-master-data.component.css']
})
export class ListMasterDataComponent implements OnInit {
  records: Master[] = [];
  constructor(private dataService: DataService, private router: Router ) { }

  ngOnInit() {
    this.dataService.records.subscribe( records => {
      this.records = records;
      console.log(records);
    });
    this.dataService.getRecords();
  }

  onDelete(id) {
    console.log('delete record', id);
    this.dataService.deleteRecord(id).subscribe(returnedRecord => {
      console.log(returnedRecord);
      this.dataService.getRecords();
    });
  }

}
