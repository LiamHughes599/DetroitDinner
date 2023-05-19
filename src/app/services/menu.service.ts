import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  Breakfast: Observable<any[]>;
  Desserts: Observable<any[]>;
  Meals: Observable<any[]>;

  constructor(public afs: AngularFirestore, public asr: AngularFireStorage) { 
    this.Breakfast = this.afs.collection('Breakfast').valueChanges();
    this.Desserts = this.afs.collection('Desserts').valueChanges();
    this.Meals = this.afs.collection('Meals').valueChanges();
    
  }

  getBreakfast(){
    return this.Breakfast;
  }
  getDesserts(){
    return this.Desserts;
    ;
  }
  getMeals(){
    return this.Meals;
  }
  
}
