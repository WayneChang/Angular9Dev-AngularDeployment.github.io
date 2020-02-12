import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showIcon = false;

  sitename = 'The Will Will Web';
  @Input() subtitle = '';
  @Output() logoClick = new EventEmitter<string>();
  imgsrc = '/assets/images/logo.png';
  fontSize = 12;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'The Will Will Web !';
    }, 2000);
  }

  changeTitle(evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename += '!';
      this.logoClick.emit(this.sitename);
    }
  }

  changeSize(evt: WheelEvent) {
    console.log(evt);
    if (evt.deltaY < 0) {
      this.fontSize++;
    } else {
      this.fontSize--;
    }
    console.log(this.fontSize);
    evt.preventDefault();
  }
}
