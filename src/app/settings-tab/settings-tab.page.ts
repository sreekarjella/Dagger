import { ThemeService } from './../shared/services/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.page.html',
  styleUrls: ['./settings-tab.page.scss'],
})
export class SettingsTabPage {

  darkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((value: boolean) => {
      this.darkMode = value;
    });
   }

  updateDarkMode(event) {
    this.themeService.toggleAppTheme();
  }

}
