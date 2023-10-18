import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.page.html',
  styleUrls: ['./bug.page.scss'],
})
export class BugPage implements OnInit {
  public weekdays: any[] = [
    { id: 1, de: 'Mo', en: 'Mon', dishes: null },
    { id: 2, de: 'Di', en: 'Tue', dishes: null },
    { id: 3, de: 'Mi', en: 'Wed', dishes: null },
    { id: 4, de: 'Do', en: 'Thu', dishes: null },
    { id: 5, de: 'Fr', en: 'Fri', dishes: null },
  ];
  public selectedWeekday = this.weekdays[2];

  constructor() { }

  ngOnInit() {
  }

}
