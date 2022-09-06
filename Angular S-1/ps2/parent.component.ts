import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  str !: string
  constructor() {
   
   }
   result !: string;
  ngOnInit(): void {
  }
  getdata(event:any){
    this.result = event.toString();
  }
  gen(){
    this.str = Math.random().toString();
  }
}
