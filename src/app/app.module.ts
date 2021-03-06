import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UserService} from './user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HeaderComponent} from './header/header.component';
import {AuthService} from './auth/auth.service';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import {LoggingInterceptor} from './interceptors/logging.interceptor';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddComponent} from './add/add.component';
import {AgmCoreModule} from '@agm/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {AddDetailsComponent} from './add-details/add-details.component';
import {UICarouselModule} from 'ui-carousel';
import {CarouselModule} from 'ngx-bootstrap';
import {FilterPipe} from './home/FilterPipe';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'angular-calendar';
import {CalendarComponent} from './calendar/calendar.component';
import {DemoUtilsModule} from './demo-utils/module';
import {MyAdsComponent} from './my-ads/my-ads.component';
import {ModalAgreementComponent} from './modal-agreement/modal-agreement.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {RatingModule} from 'ngx-rating';
import { EditUserComponent } from './edit-user/edit-user.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { ChartsComponent } from './charts/charts.component';
import {ChartsModule} from 'ng2-charts';
import {GuardService} from './guard.service';
import {GuardRoleService} from './guard-role.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'signup' , component: SignupComponent},
  { path: 'signin' , component: SigninComponent},
  { path: 'add', component: AddComponent},
  { path: 'AdDetails/:id', component: AddDetailsComponent},
  { path: 'calendar',
    component: CalendarComponent,
    canActivate: [GuardService]
  },
  { path: 'myAds',
    component: MyAdsComponent,
    canActivate: [GuardService]
  },
  { path: 'favorites',
    component: FavoritesComponent,
    canActivate: [GuardService]
  },
  { path: 'EditUser',
    component: EditUserComponent,
    canActivate: [GuardService]
  },
  { path: 'userList',
    component: UserListComponent,
    canActivate: [GuardRoleService]
  },
  { path: 'statistics',
    component: ChartsComponent,
    canActivate: [GuardRoleService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    UserListComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    AddComponent,
    CalendarComponent,
    AddDetailsComponent,
    MyAdsComponent,
    ModalAgreementComponent,
    FavoritesComponent,
    EditUserComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    UICarouselModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RatingModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    DemoUtilsModule,
    SnotifyModule.forRoot(),
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyCP6Jh0CirrZAf-IDtdktCuhKPtIgh94_0',
      libraries: ['places', 'geometry']
    })
  ],
  entryComponents: [ModalAgreementComponent],
  providers: [
    GuardRoleService,
    GuardService,
    UserService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
