import { Component, OnInit } from '@angular/core';
import {BffService} from '../bff.service'
import { IUserData } from '../IUserData';

@Component({
  selector: 'app-update-user',
  template: ` <h2>
                UpdateUserComponent
              </h2>
              <p>
                <div>
                  Name  
                  <input #name type="text"><br><br>
                  Birthday
                  <input #bd type="date" name="bday">
                  <br><br>
                  <button (click)="onClick(name.value, bd.value)">Send
                
              `,
  styles: []
})
export class UpdateUserComponent implements OnInit {

    userData : IUserData = {
      name:"",
      birthday:null
    };

    updateResult

  constructor(private _dataService : BffService) { }

  ngOnInit() {
  }

  onClick(name, bd){
    this.userData.name = name;
    this.userData.birthday = bd;
    this._dataService.sendData(this.userData).subscribe(res => this.updateResult = res)
  }
}
