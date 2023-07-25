import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  type!: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getType();
  }

  getType(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type);
  }

}
