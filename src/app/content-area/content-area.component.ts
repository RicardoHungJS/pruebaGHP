import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../services/prueba.service'

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {

  public rowData: any;

  constructor(public SP: PruebaService) { }

  ngOnInit(): void {
    this.getInfo();
    // console.log(this.rowData);
  }

  getInfo() {
    this.SP.getInfo().subscribe(info => {
      
      this.rowData = info;
      console.log(this.rowData);
    })
  }

}
