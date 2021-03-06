import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;
  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed() {
    console.log("card component - button clicked...");

    this.courseSelected.emit(this.course);
  }

  cardClasses() {

    if (this.course.category == 'BEGINNER') {
      return 'beginner'
    } else if (this.course.category == 'INTERMEDIATE') {
      return 'intermediate'
    } else if (this.course.category == 'ADVANCED') {
      return'advanced'
    }

  }

  cardStyles() {
    return {'text-decoration':'underline'};
  }
}
