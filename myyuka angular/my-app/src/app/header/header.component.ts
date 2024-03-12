import { Component } from '@angular/core';import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl ,ReactiveFormsModule} from '@angular/forms';

@Injectable()

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public cbarre = new FormControl('');
  private configUrl = 'https://world.openfoodfacts.org/api/v2/product/';

getConfig() {
  return this.http.get(this.configUrl);
}

  constructor(private http: HttpClient){}



}
