import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:any;
  constructor(public db: AngularFirestore) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getUserGender() {
    return this.currentUser.gender;    
  }

  getUserEmail() {
    return window.localStorage.getItem('user_email');
  }

  getCurrentUser() {
    this.db.collection('users').valueChanges()
    .subscribe(users => {
      this.currentUser = users.filter((user:any) => user.email===this.getUserEmail()).pop();
    })
  }

}
