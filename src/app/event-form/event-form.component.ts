import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc, collection, getDocs } from "firebase/firestore";
7

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})

export class EventFormComponent implements OnInit {

  constructor() {
   
    
  }

  ngOnInit(): void {
  
  }
  table: any
  register_form = new FormGroup({
    title: new FormControl('', [Validators.required,]),
    eventType: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    participant: new FormControl('', [Validators.required]),
    mode: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])

  })

  poster_path: any;
  screenshot_path: any


  reader = new FileReader();
  poster($event: any) {
    this.poster_path = $event.target.files[0]
  }
  Screenshot($event: any) {
    this.screenshot_path = $event.target.files[0]
  }
posterlink:any
posterurl=""
screenlink:any
screenurl=""
uploadpo(){
  const storage = getStorage();
    const postersto = ref(storage, '/posters/' + this.poster_path.name + "_" + new Date().getTime() );
    uploadBytes(postersto, this.poster_path).then(snapshot => {
      this.posterlink = snapshot.ref
    }).then(() => {
      getDownloadURL(ref(storage, this.posterlink)).then((url)=>{
        this.posterurl = url
        alert("uploaded file")
      })
      
    })
}

uploadss(){
  const storage = getStorage();
  const screensto = ref(storage, '/screenshot/' + this.screenshot_path.name + "_" + new Date().getTime() );

  uploadBytes(screensto, this.screenshot_path).then(snapshot => {
    this.screenlink = snapshot.ref
  }).then(() => {
    getDownloadURL(ref(storage, this.screenlink)).then((url)=>{
      this.screenurl = url
      alert("file Uploaded")
    })
    
  })
 
}
  register() {
    let title = this.register_form.value.title;
    let eventType = this.register_form.value.eventType;
    let startDate = this.register_form.value.startDate;
    let date = startDate
    let endDate = this.register_form.value.endDate;
    let participant = this.register_form.value.participant;
    let mode = this.register_form.value.mode
    let year = this.register_form.value.year;
    let description = this.register_form.value.description;
    let id = title + new Date().getTime();
    const db = getFirestore();
   alert(date)
    setDoc(doc(db, "Events", id), {
      title: title,
      eventType: eventType,
      startDate: startDate,
      endDate : endDate,
      participant : participant,
      mode : mode,
      year : year,
      id : id,
      description: description,
      posterurl: this.posterurl,
      screenurl: this.screenurl
    }).then(() => {
      alert("uploaded")
    });

  }
}
