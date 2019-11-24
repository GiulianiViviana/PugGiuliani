import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { lego } from './lego';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lego-angular';
  data:Object;
  results : lego[];
  o :Observable<Object>;
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http.get<lego[]>('https://3000-dc1993c3-0ea4-463d-aac7-6f7a5a399fa0.ws-eu01.gitpod.io/api').subscribe(data => {
         this.results = data['results'];
      });
    }


}
