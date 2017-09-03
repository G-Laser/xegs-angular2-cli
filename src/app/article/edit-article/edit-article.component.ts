import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  title = '';
  subtitle = '';
  description = '';
  showNotes = '';
  filePath = '';
  imagePath = '';
  constructor(private fb: FormBuilder) {this.rForm = fb.group({
    'title' : [null, Validators.required],
    'subtitle' : [null, Validators.required],
    'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    'showNotes' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    'filePath' : '',
    'imagePath' : [null, Validators.required]
  }); }

  ngOnInit() {
  }

}
