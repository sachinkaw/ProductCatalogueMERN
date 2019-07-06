import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private productService : ProductService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      price: '',
      quantity: '',
      category: '',
      skuNumber: ''
    });
  }

  addProduct(name, description, price, quantity, category, skuNumber) {
    this.productService.addProduct(name, description, price, quantity, category, skuNumber).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
