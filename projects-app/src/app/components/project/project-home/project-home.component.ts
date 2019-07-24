import { Component, OnInit, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  config = {
    viewProjectVteams: 'all'
  }
  dataSource: any;
  opened: boolean = true;
  displayedColumns = ['name', 'client', 'payment_mode', 'start_date', 'estimated_delivery_date', 'actions'];
  waiting = false;
  data;
  searchControl = { control: new FormControl(), waiting: false };
  constructor(
    public _router: Router,
    public changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
  ) {
    let config = localStorage.getItem("config");
    if (config) {
      try { this.config = JSON.parse(config); } catch (err) { }
    }
    this.searchControl.control.valueChanges.pipe(debounceTime(600), distinctUntilChanged()).subscribe(res => {
      this.searchControl.waiting = true;
    })
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

}
