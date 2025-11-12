import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../layout/service/layout.service';
import { NotificationsWidget } from './components/notificationswidget';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, ChartModule, CardModule, ButtonModule, NotificationsWidget],
    template: `
        <div class="space-y-8">
            <!-- Hero Banner -->
            <div class="relative overflow-hidden rounded-lg p-8" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 200px;">
                <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
                    <div class="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -ml-36 -mb-36"></div>
                </div>
                <div class="relative z-10 text-white max-w-2xl">
                    <h1 class="text-4xl font-bold mb-2">AI Agent Finance Command Center</h1>
                    <p class="text-lg opacity-90">Autonomous trading agents generating real-time returns across global markets</p>
                    <div class="flex gap-4 mt-6">
                        <button class="px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition">View Analysis</button>
                        <button class="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition">Deploy Agent</button>
                    </div>
                </div>
            </div>

            <!-- KPI Metrics Grid -->
            <div class="grid grid-cols-12 gap-4">
                <!-- Total Assets Under Management -->
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card overflow-hidden">
                        <div class="flex items-start justify-between">
                            <div>
                                <div class="text-sm font-semibold text-surface-500 dark:text-surface-400">AUM (Assets Under Management)</div>
                                <div class="text-3xl font-bold text-surface-900 dark:text-surface-0 mt-2">\$2.48B</div>
                                <div class="text-sm text-green-500 font-semibold mt-2">↑ 18.2% YoY</div>
                            </div>
                            <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900">
                                <i class="pi pi-pound text-2xl text-blue-600 dark:text-blue-300"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Portfolio Performance -->
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card overflow-hidden">
                        <div class="flex items-start justify-between">
                            <div>
                                <div class="text-sm font-semibold text-surface-500 dark:text-surface-400">Portfolio Return (YTD)</div>
                                <div class="text-3xl font-bold text-surface-900 dark:text-surface-0 mt-2">+42.8%</div>
                                <div class="text-sm text-green-500 font-semibold mt-2">↑ Beating S&P 500</div>
                            </div>
                            <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900">
                                <i class="pi pi-chart-line text-2xl text-green-600 dark:text-green-300"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Active Trading Agents -->
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card overflow-hidden">
                        <div class="flex items-start justify-between">
                            <div>
                                <div class="text-sm font-semibold text-surface-500 dark:text-surface-400">Active Trading Agents</div>
                                <div class="text-3xl font-bold text-surface-900 dark:text-surface-0 mt-2">156</div>
                                <div class="text-sm text-blue-500 font-semibold mt-2">⚡ 47 executing trades</div>
                            </div>
                            <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900">
                                <i class="pi pi-users text-2xl text-purple-600 dark:text-purple-300"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Win Rate & Consistency -->
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card overflow-hidden">
                        <div class="flex items-start justify-between">
                            <div>
                                <div class="text-sm font-semibold text-surface-500 dark:text-surface-400">Win Rate (Avg)</div>
                                <div class="text-3xl font-bold text-surface-900 dark:text-surface-0 mt-2">71.4%</div>
                                <div class="text-sm text-orange-500 font-semibold mt-2">📊 Highly Consistent</div>
                            </div>
                            <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900">
                                <i class="pi pi-check-circle text-2xl text-orange-600 dark:text-orange-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Charts Grid -->
            <div class="grid grid-cols-12 gap-8">
                <!-- Real-Time Performance -->
                <div class="col-span-12 lg:col-span-8">
                    <div class="card">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0">Real-Time Portfolio Performance</h3>
                                <p class="text-sm text-surface-500 dark:text-surface-400 mt-1">24-hour rolling returns across all agents</p>
                            </div>
                            <div class="flex gap-2">
                                <button class="px-3 py-1 text-xs bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded font-semibold">1D</button>
                                <button class="px-3 py-1 text-xs bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 rounded font-semibold">1W</button>
                                <button class="px-3 py-1 text-xs bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 rounded font-semibold">1M</button>
                            </div>
                        </div>
                        <p-chart type="line" [data]="portfolioPerformanceData" [options]="lineChartOptions"></p-chart>
                    </div>
                </div>

                <!-- Agent Health Status -->
                <div class="col-span-12 lg:col-span-4">
                    <div class="card">
                        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 mb-6">Agent Fleet Health</h3>
                        <p-chart type="doughnut" [data]="agentHealthData" [options]="pieChartOptions"></p-chart>
                        <div class="grid grid-cols-3 gap-4 mt-6">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-green-600 dark:text-green-400">134</div>
                                <div class="text-xs text-surface-500 dark:text-surface-400 mt-1">Healthy</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">18</div>
                                <div class="text-xs text-surface-500 dark:text-surface-400 mt-1">Warning</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-red-600 dark:text-red-400">4</div>
                                <div class="text-xs text-surface-500 dark:text-surface-400 mt-1">Offline</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Trading Volume & Risk Analysis -->
            <div class="grid grid-cols-12 gap-8">
                <!-- Trading Volume by Asset Class -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 mb-6">Trading Volume by Asset Class</h3>
                        <p-chart type="bar" [data]="tradingVolumeData" [options]="barChartOptions"></p-chart>
                    </div>
                </div>

                <!-- Risk Distribution -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 mb-6">Risk vs Return Analysis</h3>
                        <p-chart type="scatter" [data]="riskReturnData" [options]="scatterChartOptions"></p-chart>
                    </div>
                </div>
            </div>

            <!-- Detailed Metrics -->
            <div class="grid grid-cols-12 gap-8">
                <!-- Top Performing Agents -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 mb-4">🏆 Top Performing Agents (30-Day)</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 bg-surface-50 dark:bg-surface-800 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">1</div>
                                    <div>
                                        <div class="font-semibold text-surface-900 dark:text-surface-0">Alpha-Prime-7x</div>
                                        <div class="text-xs text-surface-500 dark:text-surface-400">Crypto & Forex Specialist</div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-lg font-bold text-green-600 dark:text-green-400">+48.2%</div>
                                    <div class="text-xs text-green-500">Win: 76.3%</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-surface-50 dark:bg-surface-800 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">2</div>
                                    <div>
                                        <div class="font-semibold text-surface-900 dark:text-surface-0">Beta-Momentum-5x</div>
                                        <div class="text-xs text-surface-500 dark:text-surface-400">Equity & Index Trader</div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-lg font-bold text-green-600 dark:text-green-400">+45.1%</div>
                                    <div class="text-xs text-green-500">Win: 71.8%</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-surface-50 dark:bg-surface-800 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">3</div>
                                    <div>
                                        <div class="font-semibold text-surface-900 dark:text-surface-0">Gamma-Arbitrage-3x</div>
                                        <div class="text-xs text-surface-500 dark:text-surface-400">Commodity & Futures</div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-lg font-bold text-green-600 dark:text-green-400">+39.7%</div>
                                    <div class="text-xs text-green-500">Win: 68.5%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Transactions -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 mb-4">📊 Recent High-Value Trades</h3>
                        <div class="space-y-3 max-h-96 overflow-y-auto">
                            <div class="flex items-center justify-between p-3 border-b border-surface-200 dark:border-surface-700">
                                <div>
                                    <div class="font-semibold text-surface-900 dark:text-surface-0">Alpha-Prime-7x • EURUSD</div>
                                    <div class="text-xs text-surface-500 dark:text-surface-400">Long Position • 2.5M units</div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-bold text-green-600 dark:text-green-400">+\$245K</div>
                                    <div class="text-xs text-green-500">2m ago</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-3 border-b border-surface-200 dark:border-surface-700">
                                <div>
                                    <div class="font-semibold text-surface-900 dark:text-surface-0">Beta-Momentum-5x • SPY</div>
                                    <div class="text-xs text-surface-500 dark:text-surface-400">Call Option • 10K contracts</div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-bold text-green-600 dark:text-green-400">+\$187K</div>
                                    <div class="text-xs text-green-500">5m ago</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-3 border-b border-surface-200 dark:border-surface-700">
                                <div>
                                    <div class="font-semibold text-surface-900 dark:text-surface-0">Gamma-Arbitrage-3x • BTC/USDT</div>
                                    <div class="text-xs text-surface-500 dark:text-surface-400">Spot Trade • 15.2 BTC</div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-bold text-green-600 dark:text-green-400">+\$156K</div>
                                    <div class="text-xs text-green-500">8m ago</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-3 border-b border-surface-200 dark:border-surface-700">
                                <div>
                                    <div class="font-semibold text-surface-900 dark:text-surface-0">Delta-Hedging-4x • GOLD</div>
                                    <div class="text-xs text-surface-500 dark:text-surface-400">Futures • 50 contracts</div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-bold text-red-600 dark:text-red-400">-\$42K</div>
                                    <div class="text-xs text-red-500">12m ago</div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-3">
                                <div>
                                    <div class="font-semibold text-surface-900 dark:text-surface-0">Epsilon-Trend-2x • AAPL</div>
                                    <div class="text-xs text-surface-500 dark:text-surface-400">Stock Position • 5K shares</div>
                                </div>
                                <div class="text-right">
                                    <div class="text-sm font-bold text-green-600 dark:text-green-400">+\$98K</div>
                                    <div class="text-xs text-green-500">18m ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Alerts & Notifications -->
            <app-notifications-widget />
        </div>
    `,
    styles: [`
        :host ::ng-deep {
            .card {
                @apply rounded-lg border border-surface-200 dark:border-surface-700 shadow-sm;
            }
        }
    `]
})
export class Dashboard implements OnInit {
    portfolioPerformanceData: any;
    agentHealthData: any;
    tradingVolumeData: any;
    riskReturnData: any;

    lineChartOptions: any;
    pieChartOptions: any;
    barChartOptions: any;
    scatterChartOptions: any;

    subscription: Subscription;

    constructor(private layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.initCharts();
        });
    }

    ngOnInit() {
        this.initCharts();
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const primaryColor = documentStyle.getPropertyValue('--p-primary-500');

        // Portfolio Performance Data
        this.portfolioPerformanceData = {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
            datasets: [
                {
                    label: 'Portfolio Value',
                    data: [100, 102.4, 105.8, 108.2, 112.6, 115.3, 118.9],
                    fill: true,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderColor: documentStyle.getPropertyValue('--p-blue-500'),
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-blue-500'),
                    pointHoverRadius: 6
                }
            ]
        };

        // Agent Health Data
        this.agentHealthData = {
            labels: ['Healthy (134)', 'Warning (18)', 'Offline (4)'],
            datasets: [
                {
                    data: [134, 18, 4],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--p-green-500'),
                        documentStyle.getPropertyValue('--p-orange-500'),
                        documentStyle.getPropertyValue('--p-red-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--p-green-400'),
                        documentStyle.getPropertyValue('--p-orange-400'),
                        documentStyle.getPropertyValue('--p-red-400')
                    ]
                }
            ]
        };

        // Trading Volume Data
        this.tradingVolumeData = {
            labels: ['Stocks', 'Crypto', 'Forex', 'Commodities', 'Options', 'Futures'],
            datasets: [
                {
                    label: 'Trading Volume ($M)',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-500'),
                    data: [450, 320, 280, 190, 240, 160]
                }
            ]
        };

        // Risk vs Return Data
        this.riskReturnData = {
            datasets: [
                {
                    label: 'Agent Risk/Return Profile',
                    data: [
                        { x: 2.1, y: 48.2 },
                        { x: 2.8, y: 45.1 },
                        { x: 1.9, y: 39.7 },
                        { x: 3.2, y: 38.4 },
                        { x: 2.5, y: 42.6 },
                        { x: 3.8, y: 35.2 },
                        { x: 1.6, y: 36.8 },
                        { x: 2.3, y: 41.3 }
                    ],
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    pointRadius: 7,
                    pointHoverRadius: 9
                }
            ]
        };

        // Chart Options
        this.lineChartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: { color: textColor, usePointStyle: true }
                },
                filler: { propagate: true }
            },
            scales: {
                x: {
                    ticks: { color: textColorSecondary },
                    grid: { display: false, drawBorder: false }
                },
                y: {
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                }
            }
        };

        this.pieChartOptions = {
            plugins: {
                legend: { labels: { color: textColor, usePointStyle: true } }
            }
        };

        this.barChartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.7,
            plugins: {
                legend: { labels: { color: textColor } }
            },
            scales: {
                x: {
                    ticks: { color: textColorSecondary },
                    grid: { display: false, drawBorder: false }
                },
                y: {
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                }
            }
        };

        this.scatterChartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.7,
            plugins: {
                legend: { labels: { color: textColor } }
            },
            scales: {
                x: {
                    min: 0,
                    max: 5,
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false },
                    title: { display: true, text: 'Risk %', color: textColor }
                },
                y: {
                    min: 30,
                    max: 50,
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false },
                    title: { display: true, text: 'Return %', color: textColor }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
