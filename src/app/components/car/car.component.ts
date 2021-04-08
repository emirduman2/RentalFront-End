import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];//sunu da carDto  dan cek bunu cekince yapin bozulacak html kisminda colodId yerini colorName yap id ler gelmesin isimler gelsin diye bu
  dataLoaded = false;
  filterText = "";

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
      console.log(this.cars);
    })
  }

  getCars(){ 
    return this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(brandId:number){
     this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number){
      this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded=true;
    })
  }

}