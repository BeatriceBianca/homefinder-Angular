import {ElementRef, EventEmitter, Injectable, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './models/user';
import {UserDto} from './models/userDto';
import {MatSidenav} from '@angular/material';
import {UserDtoUpdate} from './models/userDtoUpdate';
import {FormGroup} from '@angular/forms';
import {UserDataDto} from './models/userDataDto';
import {SnotifyService} from 'ng-snotify';


@Injectable()
export class UserService {
  closeDialog = new EventEmitter<boolean>();

  private _BASE_URL = 'http://localhost:8080';
  private _USERS_URL = this._BASE_URL + '/userList';
  private _USER_DATA_URL = this._BASE_URL + '/getUserData';
  private _USER_UPDATE_URL = this._BASE_URL + '/updateUser';
  private _UPDATE_USER_DATA = this._BASE_URL + '/updateUserData';
  private _GET_USER_EMAILS = this._BASE_URL + '/getUserEmails';

  itemsOnPage = 5;
  currentUser = new User;
  // vars for sidenav
  priceMin: number;
  priceMax: number;
  saleCheckbox = false;
  rentCheckbox = false;
  adItemType: string;
  surfaceMin: number;
  surfaceMax: number;
  roomsMin: number;
  roomsMax: number;
  itemsPerPageOptions = [5, 7, 10];
  furnished: string;
  yearBuiltMin: number;
  yearBuiltMax: number;
  partitioning: string;
  comfort: number;
  floorLevelMin: number;
  floorLevelMax: number;
  areaSurfaceMin: number;
  areaSurfaceMax: number;
  sidenav: MatSidenav;
  searchLocation: FormGroup;
  searchElementRef: ElementRef;
  searchLat: number;
  searchLng: number;
  // vars for callendar
  adUserPhone: number;

  constructor(private http: HttpClient,
              public snotifyService: SnotifyService) {
  }

  getUsers(): Observable<UserDataDto[]> {
    return this.http.get<UserDataDto[]>(this._USERS_URL);
  }

  updateUser(user: UserDataDto): Observable<void> {
    return this.http.post<void>(this._USER_UPDATE_URL, user);
  }

  postUserData(): Observable<UserDto> {
    return this.http.post<UserDto>(this._USER_DATA_URL, {email: this.currentUser.email});
  }

  updateUserData(data: UserDtoUpdate): Observable<void> {
    return this.http.post<void>(this._UPDATE_USER_DATA, data);
  }

  getUserEmails(): Observable<string[]> {
    return this.http.get<string[]>(this._GET_USER_EMAILS);
  }
}
