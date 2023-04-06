import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsdetailComponent } from './blogsdetail.component';

describe('BlogsdetailComponent', () => {
  let component: BlogsdetailComponent;
  let fixture: ComponentFixture<BlogsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
