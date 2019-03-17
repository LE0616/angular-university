import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
     title: 'angular-beginner-course'
  };

    onLogoClicked() {
      alert('Hello World');
    }

    onKeyUp(newTitle: string) {
      this.data.title = newTitle;
    }
}

