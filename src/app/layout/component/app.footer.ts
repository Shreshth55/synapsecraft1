import { Component } from '@angular/core';

import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
    standalone: true,
    selector: 'app-footer',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
    template: `<div class="layout-footer">
        FINANCE DASHBOARD
        <button routerLink="/landing" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">SYNAPSECRAFT</button>
    </div>`
})
export class AppFooter {}
