import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Injectable()
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  public nom: any;
  public codebarre: any;
  public marque: any;
  public cbarre = new FormControl('');
  private configUrl = 'https://world.openfoodfacts.org/api/v2/product/';
  public ingredients: any;
  public nutriments: any;
  public photo: any;
  public allergenes: any;
  public nutriscore: any;
  public nova: any;
  public huile: any;
  public condi: any;
  public pays: any;
  public fabricant: any;
  public info: any;
  getConfig() {
    return this.http.get(this.configUrl);
  }

  constructor(private http: HttpClient) {}
  afficheheader() {
    return this.http
      .get(this.configUrl + this.cbarre.value)
      .subscribe((data: any) => {
        this.nom = data.product.product_name;
        this.codebarre = data.product.code;
        this.marque = data.product.brands;
        this.ingredients = data.product.ingredients_text;
        this.nutriments = [data.product.image_nutrition_small_url];
        this.photo = data.product.image_front_small_url;
        this.allergenes = data.product.allergens;
        this.nutriscore = data.product.nutriscore_grade;
        this.nova = data.product.nova_group;

        this.condi = data.product.packaging;
        this.pays = data.product.countries_imported;
        this.fabricant = data.product.brands;
        this.info = data.product.stores;
        const element = data.product.ingredients.find(
          (element: { id: string }) => element.id === 'en:palm-oil'
        );
        this.huile = element ? 'Présente' : 'Non présente';
      });
  }
}
