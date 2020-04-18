import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from '../modelo/data';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  List: AngularFireList<any>;
  selected: Data = new Data();

  constructor(private firebase: AngularFireDatabase) { }

  get()
  {
    return this.List = this.firebase.list('horario');
  }

  insert(i: Data)
  {
    this.get();
    this.List.push({
      email: i.email,
      hora: i.hora,
      horario: i.horario
    });
  }


  delete($key: string)
  {
    this.List.remove($key);
  }
}
