import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  scheduleList = scheduledVetList;
  constructor() { }

  ngOnInit(): void {
  }

}

export const scheduledVetList = [
  { optionValue: 1, schedule: '12:00' },
  { optionValue: 2, schedule: '13:00' },
  { optionValue: 3, schedule: '14:00' },
  { optionValue: 4, schedule: '15:00' },
  { optionValue: 5, schedule: '16:00' },
  { optionValue: 6, schedule: '17:00' },
  { optionValue: 7, schedule: '18:00' },
  { optionValue: 8, schedule: '19:00' },
  { optionValue: 9, schedule: '20:00' },
  { optionValue: 10, schedule: '21:00' },
  { optionValue: 11, schedule: '22:00' },
  { optionValue: 12, schedule: '23:00' },
]