import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectsModel } from '../../../models/projects.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  opened = true;
  selectedManagers = [];
  model = new ProjectsModel();
  constructor(
    public toastr: ToastrService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.model["_id"] = params["id"];
      }
    });
  }

  ngOnInit() {
  }
}
