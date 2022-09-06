import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message !: string
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();
  constructor( ) { }

  triggerEvent(){
    this.notify.emit(Math.random().toString())
  }
 
  ngOnInit(): void {
  }

}
