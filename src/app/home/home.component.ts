import { Component, OnInit, HostListener } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HomeService } from './../service/home.service';
import { BackendService } from '../service/backend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
export class HomeComponent implements OnInit {

  processo: Blob;
  url: SafeResourceUrl;
  uploadForm: FormGroup;
  file: File;
  isOpen: boolean = true;
  invisible: boolean = false;
  desk: boolean = true;
  
  constructor(private homeService: HomeService, private config: BackendService, private fb: FormBuilder, private sanitizar: DomSanitizer) { }

  animationStart(){

    if(window.innerWidth <= 1370)  this.invisible = false;    
  }
  animationDone(){
    
    if(window.innerWidth <= 1370)  this.invisible = !this.isOpen;
  }

  ngOnInit() {

    this.uploadForm = this.fb.group({
      file: ['', Validators.required]
    });
    this.invisible = window.innerWidth < 1299;
    this.desk = window.innerWidth > 1299
    // this.download();
  }

  upload(event, data){

    event.preventDefault();
    this.homeService.uploadPdf(this.file).subscribe(r => console.log(r), e => console.log(e));
  }

  download() {

    this.homeService.downloadPdf("e7204bb0-38ce-485a-8f48-63ed89998049").subscribe(re => {

      this.processo = new Blob([re], { type: 'application/jpg' });
      this.url = this.sanitizar.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.processo));
      // saveAs(this.processo, 'processo.pdf');
    });
  }

  @HostListener('window:resize')
  onResize() {
  
    this.invisible = window.innerWidth < 1299;
    this.desk = window.innerWidth > 1299
}

  showContent() {

    if(window.innerWidth <= 1299) {
      this.isOpen = !this.isOpen;
      this.desk = false;
    } else {
      this.desk = true;
      this.isOpen = true;
      this.invisible = false;
    }
  }

}