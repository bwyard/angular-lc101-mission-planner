import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew = ["Jessica Watkins","Raja Chari", "Jasmin Moghbeli"];
  constructor() { }

  ngOnInit() {
  }

}
