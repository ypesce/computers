import { Component, OnInit } from '@angular/core';
import { ComputerServiceService } from '../../services/computer-service.service';
import { ActivatedRoute } from '@angular/router';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isLoading: boolean;
  computer: Computer;
  constructor(private computersServices: ComputerServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computersServices.getId(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.computer = data;
        this.isLoading = false;
      })
  }
}
