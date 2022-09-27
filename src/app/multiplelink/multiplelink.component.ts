import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-multiplelink',
  templateUrl: './multiplelink.component.html',
  styleUrls: ['./multiplelink.component.css'],
})
export class MultiplelinkComponent implements OnInit {
  url = '';
  fileList: File[] = [];
  listOfFiles: any[] = [];
  previewimg: any;
  x:any = "";

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      console.log(this.listOfFiles.indexOf(selectedFile.name));

      if (this.listOfFiles.indexOf(selectedFile.name) === -1) {
        console.log(this.listOfFiles.indexOf(selectedFile.name));
        
        this.fileList.push(selectedFile);//Storing the original files in fileList[]
        this.listOfFiles.push(selectedFile.name);//Storing the file Names in listOfFiles[]
      }
    }
  }

  previewIMG(data: any,index:any) { 
    let previewimg = this.fileList[index];
    //Show image preview
    let data1= URL.createObjectURL(previewimg);
    //let data= event.target.result;

     this.x = this.sanitizer.bypassSecurityTrustUrl(data1);
    let reader = new FileReader();

    reader.onload = (event: any) => {
      this.previewimg = event.target.result;
     
      console.log(this.x)
      console.log(event.target.result)
      
    };
    reader.readAsDataURL(previewimg);
  }


  removeSelectedFile(index:any) {
    // Delete the item from fileNames list
    this.listOfFiles.splice(index, 1);
    // delete file from FileList
    this.fileList.splice(index, 1);
  }
}
