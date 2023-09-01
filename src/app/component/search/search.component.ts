import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Service } from 'src/app/model/service.module';
import { ServiceService } from 'src/app/services/service-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  datas!: Service[];
  errorMsg !: string;
  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.form = this.formBuilder.group({});
  }
  ngOnInit(): void {
    // this.getSelectData();
  }
  getSelectData() {
    this.service.getData().subscribe(
      {
        next: (data) => {
          this.datas = data;
          console.log(data);
        },
        error: (err) => {
          this.errorMsg = err;
        }
      }
    );
  }
  Search() { }



}
