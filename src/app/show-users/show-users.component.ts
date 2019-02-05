import { Component, OnInit } from '@angular/core';
import {BffService} from '..//bff.service'

@Component({
 selector: 'app-show-users',
 template: `
           <br>
            <button type="button" class="btn btn-secondary" placement="top" ngbTooltip="Get Users" (click)=onClickGetUsers()>
            Get Users
            </button>
           <br>
           <br>      
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Birthday</th>
              </tr>
            </thead>
              <tbody>
                <tr *ngFor="let user of users; index as i">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.birthday }}</td>
                </tr>
              </tbody>
        </table>
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
