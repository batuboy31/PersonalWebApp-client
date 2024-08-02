import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeetItem } from '../../models/leetItem';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  

  @Input() items: LeetItem[] = [];
  @Output() itemSelected = new EventEmitter<string>();

  selectItem(item: any) {
    this.itemSelected.emit(item.description);
  }

  searchTerm : string = '';
  get filteredItems(){
    return this.items.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

}
