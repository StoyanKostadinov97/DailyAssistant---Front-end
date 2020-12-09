import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarFunctions: CalendarService;

  constructor(calendarService: CalendarService) {

    this.calendarFunctions = calendarService;
    console.log(this.calendarFunctions.currentDate + " from constructor");

  }

  ngOnInit(): void {

    this.calendarFunctions.renderTheCalendarHeader();
    this.calendarFunctions.renderTheTasks();

    const scroll = document.getElementById('calendar-table-div');
    if (scroll) scroll.scrollTop = 450;
    console.log(this.calendarFunctions.currentDate + ' After ngOnInit');
  }

}
