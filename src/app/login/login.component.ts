import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'login',  // <login></login>
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  /**
   * Set our default values
   */
  public viralShopLogo = 'assets/img/viralShop_Logo.png';
  public showSpinner = false;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('hello `Login` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
  
  onSubmit(userInfo) {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
    console.log('submitted', userInfo);
  }
}
