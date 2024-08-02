import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/BlogService';


@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(+id).subscribe(
        (data: any[]) => {
          if (data && data.length > 0) {
            this.blog = data.find(item => item.id === +id);// Dizinin ilk öğesini al
          }
        },
        (error) => {
          console.error('Error fetching blog details:', error);
        }
      );
    }
  }
}
