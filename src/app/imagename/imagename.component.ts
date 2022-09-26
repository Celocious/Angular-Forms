import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagename',
  templateUrl: './imagename.component.html',
  styleUrls: ['./imagename.component.css']
})
export class ImagenameComponent implements OnInit {

   txt :any;
  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
     var x:any = document.getElementById("myfile");
     
     if(`files` in x ){
         if(x.files.length == 0){
          this.txt = "Select one or more than one files";
         } 
         else {
          for(var i =0; i<x.files/length; i++){
            this.txt += "<br> <strong>" + (i+1) + ".file </strong> <br>";
            var file = x.files[i];
            if("name" in file){
              this.txt += "Name: " + file.name + "<br>";
            }
            if(`size` in file){
              this.txt += "Size: " + file.size + "bytes <br>"
            }
          }
         }
     }
     else{
      if(x.value == ""){
        this.txt +="select more than one files"
      }
      else {
        this.txt += "The file is not supported in your browser";
        this.txt += "<br> The path of the selected file: " + x.value;
      }
     }
  }
}
