import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.component.html',
  styleUrls: ['./ps4.component.css']
})
export class Ps4Component implements OnInit {
  title = 'Movies List';
  users=["3 Idiots","Hitman","Nova","Vikram"];

  constructor() { }

  ngOnInit(): void {
  }

}
