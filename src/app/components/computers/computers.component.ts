import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerServiceService } from '../../services/computer-service.service';
@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  isLoading: boolean;
  computers: Computer[]

  constructor(private computerService: ComputerServiceService) { }

  ngOnInit() {
    this.isLoading = true;
    this.computerService.all().subscribe(donnees => {
      this.computers = donnees;
      this.isLoading = false;
    });

  }

}
