import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  url="";
onSelect(event:any){
  console.log(event)
   if(event.target.files){
     for(let i = 0; i < File.length; i++){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (e: any) =>{
        this.urls.push(e.target.result);
      }
     }
   }
}
  constructor() { }

  ngOnInit(): void {
  }
  urls: any[] =[];
}
