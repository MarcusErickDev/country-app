import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country, Translation } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public translations: any[]=[];
  public translationsKeys: any[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id) )
      )
      .subscribe(
        country => {

          this.translationsKeys.push(Object.keys(country!.translations));
          Object.keys(country!.translations).forEach(element => {

          this.translations.push(country!.translations[element].common);
          this.translationsKeys = this.translations

          });

          if (!country) {
            return this.router.navigateByUrl('');
          }
          return this.country = country;

        });


  }



}
