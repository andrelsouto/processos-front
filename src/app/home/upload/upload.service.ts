import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private backendService:BackendService) { }

  uploadCSV(file: File){

    let dataForm = new FormData();
    dataForm.append('file', file);
    return this.backendService.protectedRequest('post', 'processo/uploadFile', dataForm);
  }
}
