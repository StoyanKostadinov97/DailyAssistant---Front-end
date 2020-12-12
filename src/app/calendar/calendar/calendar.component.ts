import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  calendarService: CalendarService;
  addIsClicked: boolean;

  constructor(calendarService: CalendarService) {
    this.addIsClicked = false;
    this.calendarService = calendarService;
    console.log(this.calendarService.currentDate + ' from constructor');
  }

  ngOnInit(): void {
    this.calendarService.getTasks().subscribe();
    this.calendarService.renderTheCalendarHeader();
    setTimeout(() => {
      this.calendarService.renderTheTasks();
    }, 0);

    const scroll = document.getElementById('calendar-table-div');
    if (scroll) scroll.scrollTop = 450;
  }
  ngAfterViewInit(): void {}

  addClicked(): void {
    this.addIsClicked = !this.addIsClicked;
  }
  submmitTask(obj: NgForm): void {
    this.calendarService.postTask(obj);
    this.addClicked();
    obj.resetForm();
  }
}
