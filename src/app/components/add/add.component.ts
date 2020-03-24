import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerServiceService } from 'src/app/services/computer-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isLoading: boolean;
  addComputer: Computer;
  bllbl: string[];
  brands: string[];
  categories: string[];

  constructor(private route: ActivatedRoute,
    private computerService: ComputerServiceService, private router: Router) { }

  ngOnInit() {
    this.brands = this.computerService.brand;
    this.bllbl = this.computerService.bllbl;
    this.categories = this.computerService.categories;

    this.addComputer = new Computer();
  }

  add() {
    this.computerService.add(this.addComputer).subscribe(data => {
      this.router.navigate(['/computers']);
    });


  }
}