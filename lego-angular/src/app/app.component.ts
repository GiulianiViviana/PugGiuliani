import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lego-angular';
  data:Object;
  o :Observable<Object>;
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://3000-c755be22-5791-478b-9055-f33be535d02a.ws-eu01.gitpod.io/').subscribe(data => {
        this.data = data;
      });
    }

}
