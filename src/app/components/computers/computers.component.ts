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
  delete(computer: Computer) {
    this.isLoading = true;
    this.computerService.delete(computer).subscribe(data => {
      this.computerService.all().subscribe(computers => {
        this.computers = computers;
        this.isLoading = false;
      });
      console.log('help-me')
    });
  }

}
