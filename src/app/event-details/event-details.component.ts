import { Component, OnInit } from '@angular/core';
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id:any;
  constructor(public activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.getdata()
   }

   data:any={};
   async getdata(){
    const db = getFirestore()
    const docRef = doc(db, "Events", this.id);
    const docSnap = await getDoc(docRef);
    this.data = docSnap.data()
   }
  ngOnInit(): void {
  }

}
