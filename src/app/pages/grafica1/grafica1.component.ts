import { Component} from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{
  public labels1: string[] = ['label1', 'label2', 'label3' ];

  public data1 = [
    [ 200, 350, 300 ],
  ];

}
