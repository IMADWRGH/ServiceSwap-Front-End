import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/model/service.module';
import { ServiceService } from 'src/app/services/service-service';

@Component({
  selector: 'app-service-list-category',
  templateUrl: './service-list-category.component.html',
  styleUrls: ['./service-list-category.component.css']
})
export class ServiceListCategoryComponent implements OnInit {
  service!: Service[];
  // constructor(private services: ServiceService) { }
  ngOnInit(): void {
  }

  // getRepairServices(): void {
  //   this.services.getServiceByType('repai').subscribe(data => {
  //     this.service = data;
  //   });

  // }
}