import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { BlogService } from '../services/BlogService';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule,HttpClientModule,CommonModule,MatCardModule,FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogs: any[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data: any[]) => {
      this.blogs = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/blog/detail', id]);
  }

  searchTerm : string='';
  get filteredItems(){
    return this.blogs.filter(blog => blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

}
