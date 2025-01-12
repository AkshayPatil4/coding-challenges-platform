import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeeditorComponent } from './codeeditor.component';

describe('CodeeditorComponent', () => {
  let component: CodeeditorComponent;
  let fixture: ComponentFixture<CodeeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeeditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
