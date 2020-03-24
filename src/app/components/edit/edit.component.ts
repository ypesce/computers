import { Component, OnInit } from '@angular/core';
import { ComputerServiceService } from '../../services/computer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isLoading: boolean;
  computerToEdit: Computer;
  brands: string[];
  types: string[];
  constructor(private route: ActivatedRoute,
    private computerService: ComputerServiceService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computerService.getId(+this.route.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.brands = this.computerService.brand;
        this.types = this.computerService.types;
        this.computerToEdit = data;
        this.isLoading = false;
      });

  }
  edit() {
    console.log('help-me')
    this.computerService.edit(this.computerToEdit).subscribe((data) => {
      this.router.navigate(['/computers']);
      console.log('samarch ? ')
    });

  }
}