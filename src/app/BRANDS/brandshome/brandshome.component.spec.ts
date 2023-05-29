import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandshomeComponent } from './brandshome.component';

describe('BrandshomeComponent', () => {
  let component: BrandshomeComponent;
  let fixture: ComponentFixture<BrandshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
