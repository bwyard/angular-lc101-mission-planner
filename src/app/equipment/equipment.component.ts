import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   nearMaxMass: boolean = false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipment: object): boolean{
     this.cargoHold.push(equipment);
     this.cargoMass += equipment.mass;
     this.nearMaxMass = ((this.maximumAllowedMass-200) < this.cargoMass && this.cargoMass < (this.maximumAllowedMass) ? true : false)
     console.log((this.maximumAllowedMass-200) < this.cargoMass && this.cargoMass < (this.maximumAllowedMass) ? true : false)

     // return 1800 < this.cargoMass && this.cargoMass < 2000 ? true : false;
     return this.nearMaxMass;
   }
   emptyHold(){
     this.cargoHold= [];
     this.cargoMass = 0;
   }

}
