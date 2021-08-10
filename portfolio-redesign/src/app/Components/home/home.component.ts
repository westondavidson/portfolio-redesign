import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  view: [number, number] = [400, 400];

  label: string = "Months Experience";

  experienceData = [
    {
      name: "C#", value: 8
    },
    {
      name: "JavaScript", value: 14
    },
    {
      name: "TypeScript", value: 7
    },
    {
      name: "Java", value: 6
    },
    {
      name: "PL/SQL", value: 3
    }
  ]


  constructor() { }

  ngOnInit(): void {

  }

}
