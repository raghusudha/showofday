import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'forgotpwd', component:ForgotpwdComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'success', component:SuccessComponent},
  // {path:'booking', component:BookingComponent},
  {path:'home', component:HomeComponent},
  {path:'payment', component:PaymentComponent},
  {path:'booking/:id', component:BookingComponent},
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
