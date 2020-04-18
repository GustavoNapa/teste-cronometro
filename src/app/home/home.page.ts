import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  horas:number = 0;
  minutos:number = 0;
  segundos:number = 0;

  interval;

  play:boolean = false;

  constructor() {}

  start(){
    this.play = true;

    console.info("Start");
    this.interval = setInterval(() => {
      this.segundos++;
      if(this.segundos === 60) {
        this.minutos++;
        this.segundos = 0;
        if(this.minutos === 60) {
          this.horas++;
          this.minutos = 0;
        }
      }
    }, 1000);
  }

  pause(){
    this.play = false;
    
    clearInterval(this.interval);
  }

  zerar(){
    this.horas = 0;
    this.minutos = 0;
    this.segundos = 0;
  }

}
