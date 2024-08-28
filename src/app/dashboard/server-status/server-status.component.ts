import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit ,OnDestroy{
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}
  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999999999

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

   // this.destroyRef.onDestroy(() => {
   //   clearInterval(interval);
   // });
 // }

  //ngAfterViewInit() {
   // console.log('AFTER VIEW INIT');
 // }

 
}}