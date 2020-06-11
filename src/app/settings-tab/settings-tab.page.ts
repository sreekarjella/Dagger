import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.page.html',
  styleUrls: ['./settings-tab.page.scss'],
})
export class SettingsTabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Delete this code.
  onClick(event) {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemDark.addEventListener('change', () => {
      this.colorTest;
    });
    // systemDark.addListener(this.colorTest);
    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

}
