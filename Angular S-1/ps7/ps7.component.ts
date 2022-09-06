import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps7',
  templateUrl: './ps7.component.html',
  styleUrls: ['./ps7.component.css']
})
export class Ps7Component implements OnInit {

  str1: string = "Hi, there! ";
  a: number= 0.12;
  b: number = 1.09;

  constructor() { }

  ngOnInit(): void {
  }

}
