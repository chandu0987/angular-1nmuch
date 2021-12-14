import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  detailsForm: FormGroup;
@Input() data ;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    // this.detailsForm = this.formBuilder.group({
    //   name: [''],
    //   age: [''],
    //   country: [''],
    // })
  }

}