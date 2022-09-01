import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Housing} from "../models/housing";
import {MatPaginator} from "@angular/material/paginator";
import {HOUSING_DATA} from "../models/housing-mock-data";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['typeHabitat', 'pieces', 'superficie', 'prix', 'adresse'];
  dataSource = new MatTableDataSource<Housing>([]);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Housing, filter: string) => this.filterPredicate(data, filter);
    this.getHousing();
  }
  filterPredicate(data: Housing, filter: string) {
    return  !filter || data.ville.toLowerCase().startsWith(filter);
  }
  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  maisonSelected = true;
  appartementSelected = true;
  private getHousing(): void {
    const maisonHabitat = this.maisonSelected ? 1 : 0;
    const appartermentHabitat = this.appartementSelected ? 2: 0;
    let data = HOUSING_DATA.filter(item => item.typehabitat.id === maisonHabitat);
    data = data.concat(HOUSING_DATA.filter(item => item.typehabitat.id === appartermentHabitat));

    this.dataSource.data = data;
  }
  habitationChanged($event: MatSlideToggleChange, typeHabitat: number) {
    if (typeHabitat == 1) {
      this.maisonSelected = $event.checked;
    } else {
      this.appartementSelected = $event.checked;
    }

    this.getHousing();
  }
}
