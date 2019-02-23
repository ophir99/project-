import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { map, switchMap, retryWhen, debounceTime } from "rxjs/operators";
import { NewsService } from '../news.service';
import { MatDialog } from '@angular/material';
import { ImagesComponent } from './../images/images.component';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  newsType;
  country;
  filesArr = [];
  content = [];
  constructor(
    private aRoute: ActivatedRoute,
    private newsS: NewsService,
    private router: Router,
    private myD: MatDialog
  ) { }

  ngOnInit() {
    this.aRoute.queryParams
    .pipe(
      debounceTime(1500),
      map(data=> [data.query, data.location]),
      switchMap(data => this.newsS.getContent(data[0])),
      map((res: any) => res.response.results),
      retryWhen(err => err)
    )
    .subscribe(
      (content) => {
          this.content = content;
      }
    )
  }


  logout(){
    sessionStorage.removeItem("token");
    this.router.navigate(["/"])
  }

  triggerFileUpload(fileEl){
      fileEl.click();
  }

  getFiles(event){
    // let rawArr = event.target.files;
    // const fD = new FormData();
    // fD.append("Myfiles",rawArr);
    let filesArr = Array.from(event.target.files);

    filesArr.forEach((el)=>{
      this.uploadFiles(el).subscribe(
        (file)=>{
            this.filesArr.push(file);
        }
      )
    })
  }

  uploadFiles(file){
    const fileR = new FileReader();
    return Observable.create((observer)=>{
        fileR.onloadend = (ev:any)=>{
          observer.next(ev.target.result)
        }
        fileR.readAsDataURL(file);
    })
  }

  showImages(){
    this.myD.open(ImagesComponent, {
      data: {
        images: this.filesArr
      }
    })
  }
}
