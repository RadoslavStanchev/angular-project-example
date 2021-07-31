import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-hotel-offers',
  templateUrl: './hotel-offers.component.html',
  styleUrls: ['./hotel-offers.component.css']
})
export class HotelOffersComponent implements OnInit {

  offers: Observable<any[]> | Observable<any> | any;
  constructor(public db: AngularFirestore) {
    this.offers = db.collection('offers').valueChanges({idField: 'id'})
  }

  ngOnInit(): void {
  }

  deleteHotelOffer(e:any) {
    let hotelOfferId = e.target.id;
    this.db.doc(`offers/${hotelOfferId}`).delete();
  }
}
