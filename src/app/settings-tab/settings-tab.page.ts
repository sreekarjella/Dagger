import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.page.html',
  styleUrls: ['./settings-tab.page.scss'],
})
export class SettingsTabPage {

  darkMode = true;

  constructor() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersColor.matches;
    // this.updateDarkMode();
  }

  updateDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

}
