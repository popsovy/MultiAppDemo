import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit, OnDestroy {
  timer: any;
  time: string

  constructor() { }

  ngOnInit() {
    var setTime = () => {
      var today = new Date();
      this.time = ("0" + today.getHours()).slice(-2) + ":" + 
                  ("0" + today.getMinutes()).slice(-2) + ":" + 
                  ("0" + today.getSeconds()).slice(-2);
    };
    setTime();
    this.timer = setInterval(setTime, 500);
  }

  ngOnDestroy(){
    if (this.timer){
      clearTimeout(this.timer);
    }
  }
}