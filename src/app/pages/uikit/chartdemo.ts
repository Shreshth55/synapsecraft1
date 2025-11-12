import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../layout/service/layout.service';

@Component({
    selector: 'app-chart-demo',
    standalone: true,
    imports: [CommonModule, ChartModule, FluidModule],
    template: `
        <p-fluid>
            <!-- Header -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0 mb-2">AI Agent Finance Dashboard</h1>
                <p class="text-text-color-secondary">Real-time monitoring and analytics for autonomous agent portfolio performance</p>
            </div>

            <!-- KPI Cards -->
            <div class="grid grid-cols-12 gap-4 mb-8">
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card p-6 text-white" style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);">
                        <div class="text-sm font-semibold opacity-90">Total Agent Returns</div>
                        <div class="text-3xl font-bold mt-2">+24.8%</div>
                        <div class="text-xs mt-2 opacity-75">↑ 3.2% from last month</div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card p-6 text-white" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <div class="text-sm font-semibold opacity-90">Active Agents</div>
                        <div class="text-3xl font-bold mt-2">47</div>
                        <div class="text-xs mt-2 opacity-75">8 agents processing</div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card p-6 text-white" style="background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);">
                        <div class="text-sm font-semibold opacity-90">Avg Win Rate</div>
                        <div class="text-3xl font-bold mt-2">68.3%</div>
                        <div class="text-xs mt-2 opacity-75">↑ 2.1% improvement</div>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="card p-6 text-white" style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);">
                        <div class="text-sm font-semibold opacity-90">Risk Score</div>
                        <div class="text-3xl font-bold mt-2">3.2/10</div>
                        <div class="text-xs mt-2 opacity-75">Low Risk Portfolio</div>
                    </div>
                </div>
            </div>

            <!-- Charts Grid -->
            <div class="grid grid-cols-12 gap-8">
                <!-- Agent Performance Over Time -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <div class="font-semibold text-lg mb-4 flex items-center gap-2">
                            <i class="pi pi-chart-line text-blue-500"></i>
                            Agent Performance Trend
                        </div>
                        <p-chart type="line" [data]="agentPerformanceData" [options]="lineOptions"></p-chart>
                    </div>
                </div>

                <!-- Trading Volume by Agent -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <div class="font-semibold text-lg mb-4 flex items-center gap-2">
                            <i class="pi pi-chart-bar text-green-500"></i>
                            Trading Volume by Agent Type
                        </div>
                        <p-chart type="bar" [data]="agentVolumeData" [options]="barOptions"></p-chart>
                    </div>
                </div>

                <!-- Portfolio Allocation -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card flex flex-col items-center">
                        <div class="font-semibold text-lg mb-4 w-full flex items-center gap-2">
                            <i class="pi pi-chart-pie text-purple-500"></i>
                            Portfolio Asset Allocation
                        </div>
                        <p-chart type="pie" [data]="portfolioAllocationData" [options]="pieOptions" class="w-full"></p-chart>
                    </div>
                </div>

                <!-- Agent Health Distribution -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card flex flex-col items-center">
                        <div class="font-semibold text-lg mb-4 w-full flex items-center gap-2">
                            <i class="pi pi-chart-doughnut text-indigo-500"></i>
                            Agent Health Status
                        </div>
                        <p-chart type="doughnut" [data]="agentHealthData" [options]="pieOptions" class="w-full"></p-chart>
                    </div>
                </div>

                <!-- Risk vs Return Scatter -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <div class="font-semibold text-lg mb-4 flex items-center gap-2">
                            <i class="pi pi-circle-fill text-cyan-500"></i>
                            Risk vs Return Analysis
                        </div>
                        <p-chart type="scatter" [data]="riskReturnData" [options]="scatterOptions"></p-chart>
                    </div>
                </div>

                <!-- Market Metrics Radar -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card flex flex-col items-center">
                        <div class="font-semibold text-lg mb-4 w-full flex items-center gap-2">
                            <i class="pi pi-star-fill text-yellow-500"></i>
                            Agent Performance Metrics
                        </div>
                        <p-chart type="radar" [data]="radarData" [options]="radarOptions" class="w-full"></p-chart>
                    </div>
                </div>

                <!-- Agent Activity Polar Area -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card flex flex-col items-center">
                        <div class="font-semibold text-lg mb-4 w-full flex items-center gap-2">
                            <i class="pi pi-bolt text-red-500"></i>
                            Agent Activity Distribution
                        </div>
                        <p-chart type="polarArea" [data]="agentActivityData" [options]="polarOptions" class="w-full"></p-chart>
                    </div>
                </div>

                <!-- Cumulative Returns Area Chart -->
                <div class="col-span-12 lg:col-span-6">
                    <div class="card">
                        <div class="font-semibold text-lg mb-4 flex items-center gap-2">
                            <i class="pi pi-area-chart text-teal-500"></i>
                            Cumulative Returns (30 Days)
                        </div>
                        <p-chart type="line" [data]="cumulativeReturnsData" [options]="areaChartOptions"></p-chart>
                    </div>
                </div>

                <!-- Profit & Loss Distribution -->
                <div class="col-span-12">
                    <div class="card">
                        <div class="font-semibold text-lg mb-4 flex items-center gap-2">
                            <i class="pi pi-bars text-emerald-500"></i>
                            Monthly P&L Distribution (All Agents)
                        </div>
                        <p-chart type="bar" [data]="pnlDistributionData" [options]="barOptions"></p-chart>
                    </div>
                </div>
            </div>
        </p-fluid>
    `
})
export class ChartDemo implements OnInit, OnDestroy {
    agentPerformanceData: any;
    agentVolumeData: any;
    portfolioAllocationData: any;
    agentHealthData: any;
    riskReturnData: any;
    agentActivityData: any;
    cumulativeReturnsData: any;
    pnlDistributionData: any;

    lineOptions: any;
    barOptions: any;
    pieOptions: any;
    polarOptions: any;
    radarOptions: any;
    scatterOptions: any;
    areaChartOptions: any;
    radarData: any;

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

        // Agent Performance Trend
        this.agentPerformanceData = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            datasets: [
                {
                    label: 'Alpha Agent Portfolio',
                    data: [12, 19, 15, 25, 22, 30, 28, 35],
                    fill: true,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderColor: documentStyle.getPropertyValue('--p-blue-500'),
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-blue-500')
                },
                {
                    label: 'Beta Agent Portfolio',
                    data: [8, 14, 18, 20, 25, 28, 32, 38],
                    fill: true,
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderColor: documentStyle.getPropertyValue('--p-green-500'),
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-green-500')
                },
                {
                    label: 'Gamma Agent Portfolio',
                    data: [5, 10, 12, 18, 20, 24, 26, 32],
                    fill: true,
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    borderColor: documentStyle.getPropertyValue('--p-purple-500'),
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-purple-500')
                }
            ]
        };

        // Agent Volume Data
        this.agentVolumeData = {
            labels: ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'],
            datasets: [
                {
                    label: 'Forex Trades',
                    backgroundColor: documentStyle.getPropertyValue('--p-blue-500'),
                    data: [2500, 1900, 3200, 2100, 1600, 2300]
                },
                {
                    label: 'Crypto Trades',
                    backgroundColor: documentStyle.getPropertyValue('--p-purple-500'),
                    data: [1800, 2200, 1900, 2500, 2100, 1700]
                },
                {
                    label: 'Stock Trades',
                    backgroundColor: documentStyle.getPropertyValue('--p-teal-500'),
                    data: [1200, 1500, 1800, 1300, 1900, 1400]
                }
            ]
        };

        // Portfolio Allocation
        this.portfolioAllocationData = {
            labels: ['Stocks (35%)', 'Crypto (28%)', 'Forex (22%)', 'Commodities (10%)', 'Bonds (5%)'],
            datasets: [
                {
                    data: [35, 28, 22, 10, 5],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--p-blue-500'),
                        documentStyle.getPropertyValue('--p-purple-500'),
                        documentStyle.getPropertyValue('--p-teal-500'),
                        documentStyle.getPropertyValue('--p-orange-500'),
                        documentStyle.getPropertyValue('--p-indigo-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--p-blue-400'),
                        documentStyle.getPropertyValue('--p-purple-400'),
                        documentStyle.getPropertyValue('--p-teal-400'),
                        documentStyle.getPropertyValue('--p-orange-400'),
                        documentStyle.getPropertyValue('--p-indigo-400')
                    ]
                }
            ]
        };

        // Agent Health Status
        this.agentHealthData = {
            labels: ['Healthy (42)', 'Warning (4)', 'Critical (1)'],
            datasets: [
                {
                    data: [42, 4, 1],
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

        // Risk vs Return Scatter
        this.riskReturnData = {
            datasets: [
                {
                    label: 'AI Agents',
                    data: [
                        { x: 2.1, y: 15.2 },
                        { x: 3.4, y: 22.8 },
                        { x: 1.8, y: 12.5 },
                        { x: 4.2, y: 28.9 },
                        { x: 2.9, y: 18.6 },
                        { x: 3.1, y: 20.3 },
                        { x: 5.1, y: 35.7 },
                        { x: 2.3, y: 16.8 }
                    ],
                    backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                    pointRadius: 8,
                    pointHoverRadius: 10
                }
            ]
        };

        // Agent Activity Polar
        this.agentActivityData = {
            datasets: [
                {
                    data: [82, 76, 64, 88, 71, 79],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.6)',
                        'rgba(34, 197, 94, 0.6)',
                        'rgba(168, 85, 247, 0.6)',
                        'rgba(59, 130, 246, 0.6)',
                        'rgba(251, 146, 60, 0.6)',
                        'rgba(14, 165, 233, 0.6)'
                    ],
                    label: 'Activity Score'
                }
            ],
            labels: ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta']
        };

        // Cumulative Returns
        this.cumulativeReturnsData = {
            labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
            datasets: [
                {
                    label: 'Cumulative Returns %',
                    data: [2.1, 5.8, 8.3, 12.5, 15.2, 18.9, 24.8],
                    fill: true,
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    borderColor: documentStyle.getPropertyValue('--p-emerald-500'),
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-emerald-500')
                }
            ]
        };

        // P&L Distribution
        this.pnlDistributionData = {
            labels: ['Agent Alpha', 'Agent Beta', 'Agent Gamma', 'Agent Delta', 'Agent Epsilon', 'Agent Zeta', 'Agent Theta', 'Agent Iota'],
            datasets: [
                {
                    label: 'Profit ($K)',
                    backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
                    data: [45, 38, 52, 41, 29, 35, 48, 33]
                },
                {
                    label: 'Loss ($K)',
                    backgroundColor: documentStyle.getPropertyValue('--p-red-500'),
                    data: [-8, -12, -5, -10, -15, -7, -6, -11]
                }
            ]
        };

        // Base Bar Options
        this.barOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        // Pie Options
        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        // Line Options
        this.lineOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true
                    }
                },
                filler: {
                    propagate: true
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        // Scatter Options
        this.scatterOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    min: 0,
                    max: 6,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    },
                    title: {
                        display: true,
                        text: 'Risk (%)'
                    }
                },
                y: {
                    min: 0,
                    max: 40,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    },
                    title: {
                        display: true,
                        text: 'Return (%)'
                    }
                }
            }
        };

        // Area Chart Options
        this.areaChartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                },
                filler: {
                    propagate: true
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        // Polar Options
        this.polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    },
                    ticks: {
                        display: false,
                        color: textColorSecondary
                    }
                }
            }
        };

        // Radar Options
        this.radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true
                    }
                }
            },
            scales: {
                r: {
                    pointLabels: {
                        color: textColor
                    },
                    grid: {
                        color: surfaceBorder
                    },
                    ticks: {
                        color: textColorSecondary
                    }
                }
            }
        };

        // Radar Data
        this.radarData = {
            labels: ['Profitability', 'Consistency', 'Risk Management', 'Speed', 'Adaptability', 'Reliability'],
            datasets: [
                {
                    label: 'Alpha Agent',
                    borderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-blue-400'),
                    data: [85, 78, 82, 88, 80, 86]
                },
                {
                    label: 'Beta Agent',
                    borderColor: documentStyle.getPropertyValue('--p-green-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-green-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-green-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-green-400'),
                    data: [75, 85, 78, 80, 88, 82]
                },
                {
                    label: 'Gamma Agent',
                    borderColor: documentStyle.getPropertyValue('--p-purple-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--p-purple-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
                    data: [80, 75, 85, 75, 82, 80]
                }
            ]
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
