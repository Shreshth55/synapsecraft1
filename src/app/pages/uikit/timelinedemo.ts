import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-timeline-demo',
    standalone: true,
    imports: [CommonModule, TimelineModule, ButtonModule, CardModule],
    template: ` <div class="grid grid-cols-12 gap-8">
        <div class="col-span-6">
            <div class="card">
                <div class="font-semibold text-xl mb-4">AGENT-Alpha</div>
                <p-timeline [value]="events1">
                    <ng-template #content let-event>
                        {{ event.status }}
                    </ng-template>
                </p-timeline>
            </div>
        </div>
        <div class="col-span-6">
            <div class="card">
                <div class="font-semibold text-xl mb-4">AGENT-Beta</div>
                <p-timeline [value]="events1" align="right">
                    <ng-template #content let-event>
                        {{ event.status }}
                    </ng-template>
                </p-timeline>
            </div>
        </div>
        <div class="col-span-6">
            <div class="card">
                <div class="font-semibold text-xl mb-4">AGENT-Gamma</div>
                <p-timeline [value]="events1" align="alternate">
                    <ng-template #content let-event>
                        {{ event.status }}
                    </ng-template>
                </p-timeline>
            </div>
        </div>
        <div class="col-span-6">
            <div class="card">
                <div class="font-semibold text-xl mb-4">AGENT-Delta</div>
                <p-timeline [value]="events1">
                    <ng-template #content let-event>
                        <small class="p-text-secondary">{{ event.date }}</small>
                    </ng-template>
                    <ng-template #opposite let-event>
                        {{ event.status }}
                    </ng-template>
                </p-timeline>
            </div>
        </div>
        <div class="col-span-full">
            <div class="card">
                <div class="font-semibold text-xl mb-4">AGENT ORCHESTRATION</div>
                <p-timeline [value]="events1" align="alternate" styleClass="customized-timeline">
                    <ng-template #marker let-event>
                        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
                            <i [class]="event.icon"></i>
                        </span>
                    </ng-template>
                    <ng-template #content let-event>
                        <p-card [header]="event.status" [subheader]="event.date">
                            <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
                            
                            <p-button label="Read more" [text]="true" />
                        </p-card>
                    </ng-template>
                </p-timeline>
            </div>
        </div>
        
    </div>`
})
export class TimelineDemo {
    events1: any[] = [];

    events2: any[] = [];

    ngOnInit() {
        this.events1 = [
            {
                status: 'Ordered',
                date: '15/10/2025 10:30',
                icon: 'pi pi-shopping-cart',
                color: '#9C27B0',
            },
            {
                status: 'Processing',
                date: '15/10/2025 14:00',
                icon: 'pi pi-cog',
                color: '#673AB7'
            },
            {
                status: 'Shipped',
                date: '15/10/2025 16:15',
                icon: 'pi pi-envelope',
                color: '#FF9800'
            },
            {
                status: 'Delivered',
                date: '16/10/2025 10:00',
                icon: 'pi pi-check',
                color: '#607D8B'
            }
        ];

        
    }
}
