import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-charts',
  templateUrl: './experience-charts.component.html',
  styleUrls: ['./experience-charts.component.css']
})
export class ExperienceChartsComponent implements OnInit {

  view: [number, number] = [400, 400];

  label: string = "Months Experience"

  constructor() {
   }

  ngOnInit(): void {
  }

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



}
