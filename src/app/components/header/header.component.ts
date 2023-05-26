import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    data: any

    constructor(private http: DataService) {}

    ngOnInit(): void {
      this.data = this.http.loadData();
      this.data = this.data[0]
    }
}
