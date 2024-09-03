import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeService } from '@lib/services/theme';
import { LayoutComponent } from './lib/components/layouts/layout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private readonly _themeService = inject(ThemeService);

    ngOnInit(): void {
        this._themeService.init();
    }
}
