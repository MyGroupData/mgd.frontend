import { Component, OnInit } from '@angular/core';
import {BffService} from '..//bff.service'

@Component({
 selector: 'app-show-users',
 template: `<h2  *ngIf="true">
 Name is now: {{data}}
           </h2>
           <br>
           <br>
           <button (click)=onClickGetUsers()>Get Users</button>
           <div *ngFor="let user of users">
             <h2>{{user.name}}, {{user.birthday}}</h2>
           </div>
           `,
 styles: []
})
export class ShowUsersComponent implements OnInit {

 constructor(private _fetchData : BffService) { }

 private data;
 public users;
 ngOnInit() {
   // this._fetchData.getData()
   //  .subscribe(data => this.data = data);
 }

 onClickGetUsers(){
   this._fetchData.getUsers()
     .subscribe((users) => {
       this.users = JSON.parse(users);
     });
 }

}
