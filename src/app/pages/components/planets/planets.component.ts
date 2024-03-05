import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Planet } from '../../interfaces/responses';
import { PlanetComponent } from '../../../entities/components/planet/planet.component';
import { RouterModule } from '@angular/router';
import { getId } from '../../../shared/utils/getid';
import { RouterButtonComponent } from '../../../shared/components/router-button/router-button.component';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [PlanetComponent, RouterModule, RouterButtonComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {

  public planets: Planet[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getPlanets().subscribe((res) => {
      res.results.forEach((item) => {
        this.planets.push(item);
    }) 
  })
}

public getId(str: string) {
  return getId(str);
}

}
