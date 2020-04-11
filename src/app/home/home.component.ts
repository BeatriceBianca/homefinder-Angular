import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {UserService} from '../user.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  places: string[] = [];

  constructor(private authService: AuthService,
              private mapsAPILoader: MapsAPILoader,
              public userService: UserService,
              private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.mapsAPILoader.load();
    this.spinnerService.show();
  }
}
