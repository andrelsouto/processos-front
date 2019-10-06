import { HttpResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UploadService } from './upload.service';
import { finalize } from 'rxjs/operators';
import { MessageResponseComponent } from 'src/app/shared/message-response/message-response.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  file: File;
  uploadForm: FormGroup;
  @ViewChild(MessageResponseComponent) message: MessageResponseComponent;
  class: string;

  constructor(private fb: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {

    this.uploadForm = this.fb.group({

      file: ['', Validators.required]
    });
  }

  upload(file: File) {

    this.file = file;
  }

  sendArchive(event) {

    event.preventDefault();
    this.uploadService.uploadCSV(this.file).subscribe(
      h => {
        this.message.message = h;
        this.class = 'success';
      },
      () => {
        this.message.message = 'Erro ao fazer upload dos arquivos';
        this.class = 'danger';
      }
    );
  }

}