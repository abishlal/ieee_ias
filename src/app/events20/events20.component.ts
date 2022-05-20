import { Component, OnInit } from '@angular/core';
import {  getFirestore, setDoc, collection, getDocs } from "firebase/firestore";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-events20',
  templateUrl: './events20.component.html',
  styleUrls: ['./events20.component.css']
})
export class Events20Component implements OnInit {

 
  year:any
  constructor(public activateRoute: ActivatedRoute) {
    this.eventData();
    this.year = this.activateRoute.snapshot.paramMap.get("year");
   }
events:any =[]
  async eventData(){
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "Events"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      this.events.push(doc.data())
    });
  }


  ngOnInit(): void {
  }

}
