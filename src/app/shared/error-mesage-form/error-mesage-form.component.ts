import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-error-mesage-form',
  templateUrl: './error-mesage-form.component.html',
  styleUrls: ['./error-mesage-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMesageFormComponent implements OnInit {
  @Input() public errorMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
