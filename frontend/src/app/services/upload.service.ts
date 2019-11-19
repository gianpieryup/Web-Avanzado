import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';


@Injectable({
  providedIn: 'root'
})
export class UploadService  extends BaseService{

    postData(obj){
      try {
        this.setEndPoint('upload')
        return this.post(obj)
      } catch (error) {
        throw error;
      }
    }
}
