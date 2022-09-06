import { Component} from '@angular/core';

@Component({
  selector: 'app-ps1',
  templateUrl: './ps1.component.html',
  styleUrls: ['./ps1.component.css']
})
export class PS1Component {
  firstName="";
  lastName="";
  DOJ="";
  getVal(firstName, lastName, DOJ)
  {
    console.log(firstName,lastName,DOJ)
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOJ = DOJ;
  }
}

