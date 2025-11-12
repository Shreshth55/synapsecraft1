import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Tooltip } from "primeng/tooltip";
@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, ButtonModule, CommonModule, StyleClassModule, AppConfigurator, Menu, Tooltip],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                
                <span >FINANCE DASHBOARD </span>
            </a>
            
        </div>
        <button routerLink="/landing" class="flex justify-center p-60"><h2>SYNAPSECRAFT</h2></button>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" routerLink="/uikit/formlayout" pTooltip="Register" class="layout-topbar-action">
                        <i class="pi pi-address-book"></i>
                        <span>Register</span>
                    </button>
                    <button type="button" routerLink="/auth/login" pTooltip="Login" class="layout-topbar-action">
                        <i class="pi pi-bullseye"></i>
                        <span>Login</span>
                    </button>
                    <div class="flex items-center">
                        <button 
                            type="button"
                            class="layout-topbar-action"
                            (click)="menu.toggle($event)">
                            <i class="pi pi-user"></i>
                        </button>
                        <p-menu #menu [model]="items" [popup]="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
   // items!: MenuItem[];
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Welcome! User',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-power-off'
                    }
                ]
            }
        ];
    }
    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
