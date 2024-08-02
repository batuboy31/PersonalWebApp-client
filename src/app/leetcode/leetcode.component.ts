import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LeetItem } from '../models/leetItem';
import { LeetcodeService } from '../services/LeetcodeService';
import { ListComponent } from "./list/list.component";
import { SolutionComponent } from "./solution/solution.component";

@Component({
  selector: 'app-leetcode',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatProgressBarModule, HttpClientModule, NgFor, ListComponent, SolutionComponent],
  templateUrl: './leetcode.component.html',
  styleUrl: './leetcode.component.css'
})
export class LeetcodeComponent implements OnInit {

  items: LeetItem[]=[];
  selectedDescription : string = "";


  constructor(private leetCodeService : LeetcodeService) {}
  
  ngOnInit(): void {
    this.leetCodeService.getLeets().subscribe((data: LeetItem[]) => {
      this.items = data;
    })
  }

  onItemSelected(description: string) {
    this.selectedDescription = description;
  }


}
