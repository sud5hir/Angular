import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


import { ChildComponent } from '../child/child.component';
import { DataService } from '../services/dataservice';
import { CourseService } from '../services/course.service';
import { AppNonSingletonService } from '../services/logger.service';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [AppNonSingletonService]
})

export class CourseComponent implements OnInit, AfterViewInit {

  title = 'CourseComponent';
  courses: any;
  @ViewChild(ChildComponent) child: any;
  parentReceivedData: any;
  //component initialized
  constructor(services: CourseService, private _dataService: DataService, appService: AppNonSingletonService) {
    this.courses = services.getCourses();
    console.log("appService", appService);
    console.log("appService", _dataService);
    console.log("constructor", this.child);
  }

  //Component is fully renedered
  ngOnInit() {
    console.log("ngOnInit", this.child);

  }

  // called after view initialized fully
  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.child);
    this.parentReceivedData = this.child.courses;
  }
}
