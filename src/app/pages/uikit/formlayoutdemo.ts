import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'app-formlayout-demo',
    standalone: true,
    imports: [CommonModule, InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule],
    template: `<div class="min-h-screen" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 25%, #1a1f35 50%, #0f172a 75%, #1e293b 100%); position: relative;">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style="animation-delay: 4s;"></div>
    </div>

    <!-- Content Wrapper -->
    <div class="relative z-10 p-8 space-y-8">
        <p-fluid>
        <!-- Registration: full width card on top -->
        <div class="card overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%); box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);">
            <div class="p-8 flex items-center justify-between">
                <div>
                    <div class="text-sm font-semibold text-blue-300"> USER ONBOARDING</div>
                    <div class="text-4xl font-black text-white mt-2">Complete Your Registration</div>
                    <p class="text-gray-300 mt-2">Join thousands of satisfied users and start your journey today</p>
                </div>
                <div class="hidden lg:flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                    <i class="pi pi-user-plus text-4xl text-white"></i>
                </div>
            </div>
        </div>

        <!-- Other cards: two-column layout on md+, stacked on small screens -->
        <div class="grid grid-cols-12 gap-8">
           
            <div class="col-span-12 lg:col-span-6 space-y-8">
                <!-- User Details Card -->
                <div class="card overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10" style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <div class="p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                                <i class="pi pi-user text-white text-lg"></i>
                            </div>
                            <div class="font-bold text-white text-xl">User Details</div>
                        </div>
                        <div class="space-y-6">
                            <div class="flex flex-col gap-3">
                                <label for="name1" class="text-sm font-semibold text-gray-300">Full Name</label>
                                <input pInputText id="name1" type="text" placeholder="Enter your full name" class="p-3 rounded-lg" />
                            </div>
                            <div class="flex flex-col gap-3">
                                <label for="email1" class="text-sm font-semibold text-gray-300">Email Address</label>
                                <input pInputText id="email1" type="email" placeholder="your@email.com" class="p-3 rounded-lg" />
                            </div>
                            <div class="flex flex-col gap-3">
                                <label for="age1" class="text-sm font-semibold text-gray-300">Age</label>
                                <input pInputText id="age1" type="number" placeholder="Enter your age" class="p-3 rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
                </div>

                <!-- Secondary Person Card -->
                <div class="card overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10" style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <div class="p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                                <i class="pi pi-users text-white text-lg"></i>
                            </div>
                            <div class="font-bold text-white text-xl">Secondary Person</div>
                        </div>
                        <div class="space-y-6">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex flex-col gap-3">
                                    <label for="name2" class="text-sm font-semibold text-gray-300">First Name</label>
                                    <input pInputText id="name2" type="text" placeholder="First name" class="p-3 rounded-lg" />
                                </div>
                                <div class="flex flex-col gap-3">
                                    <label for="email2" class="text-sm font-semibold text-gray-300">Email</label>
                                    <input pInputText id="email2" type="email" placeholder="Email" class="p-3 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                </div>
            </div>

            <div class="col-span-12 lg:col-span-6 space-y-8">
                <!-- Verify Details Card -->
                <div class="card overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <div class="p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                                <i class="pi pi-check-circle text-white text-lg"></i>
                            </div>
                            <div class="font-bold text-white text-xl">Verify Details</div>
                        </div>
                        <div class="space-y-6">
                            <div class="flex flex-col gap-3">
                                <label for="name3" class="text-sm font-semibold text-gray-300">Full Name</label>
                                <input pInputText id="name3" type="text" placeholder="Confirm your name" class="p-3 rounded-lg" />
                            </div>
                            <div class="flex flex-col gap-3">
                                <label for="email3" class="text-sm font-semibold text-gray-300">Email Address</label>
                                <input pInputText id="email3" type="email" placeholder="Confirm your email" class="p-3 rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </div>

                <!-- Verify Name Card -->
                <div class="card overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10" style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0.05) 100%); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <div class="p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                                <i class="pi pi-pen-to-square text-white text-lg"></i>
                            </div>
                            <div class="font-bold text-white text-xl">Verify Name</div>
                        </div>
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex flex-col gap-3">
                                    <label for="firstname1" class="text-sm font-semibold text-gray-300">First Name</label>
                                    <input pInputText id="firstname1" type="text" placeholder="First name" class="p-3 rounded-lg" />
                                </div>
                                <div class="flex flex-col gap-3">
                                    <label for="lastname1" class="text-sm font-semibold text-gray-300">Last Name</label>
                                    <input pInputText id="lastname1" type="text" placeholder="Last name" class="p-3 rounded-lg" />
                                </div>
                            </div>
                            <p-button label="Submit" [fluid]="true" class="mt-4"></p-button>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
                </div>

                <!-- Verify Password Card -->
                <div class="card overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
                    <div class="p-8">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                                <i class="pi pi-lock text-white text-lg"></i>
                            </div>
                            <div class="font-bold text-white text-xl">Security</div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex flex-col gap-3">
                                <label for="password" class="text-sm font-semibold text-gray-300">Password</label>
                                <input pInputText id="password" type="password" placeholder="Enter your password" class="p-3 rounded-lg" />
                            </div>
                            <div class="p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
                                <p class="text-xs text-yellow-300 font-semibold">Password should be changed once every month for security</p>
                            </div>
                        </div>
                    </div>
                    <div class="h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
                </div>
            </div>
        </div>

        <!-- Advanced Address Card -->
        <div class="card overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
            <div class="p-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <i class="pi pi-home text-white text-xl"></i>
                    </div>
                    <div class="font-bold text-white text-2xl">Address Information</div>
                </div>

                <div class="space-y-6">
                    <!-- Name Row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex flex-col gap-3">
                            <label for="firstname2" class="text-sm font-semibold text-gray-300">First Name</label>
                            <input pInputText id="firstname2" type="text" placeholder="Enter first name" class="p-3 rounded-lg" />
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="lastname2" class="text-sm font-semibold text-gray-300">Last Name</label>
                            <input pInputText id="lastname2" type="text" placeholder="Enter last name" class="p-3 rounded-lg" />
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="flex flex-col gap-3">
                        <label for="address" class="text-sm font-semibold text-gray-300">Street Address</label>
                        <textarea pTextarea id="address" rows="4" placeholder="Enter your complete address" class="p-3 rounded-lg"></textarea>
                    </div>

                    <!-- State & Zip -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex flex-col gap-3">
                            <label for="state" class="text-sm font-semibold text-gray-300">State/Province</label>
                            <p-select id="state" [(ngModel)]="dropdownItem" [options]="dropdownItems" optionLabel="name" placeholder="Select State" class="w-full"></p-select>
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="zip" class="text-sm font-semibold text-gray-300">Zip/Postal Code</label>
                            <input pInputText id="zip" type="text" placeholder="Enter zip code" class="p-3 rounded-lg" />
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex gap-4 mt-8 pt-6 border-t border-white/10">
                        <p-button label="Save" [fluid]="false" class="flex-1"></p-button>
                        <p-button label="Submit" severity="success" [fluid]="false" class="flex-1"></p-button>
                        <p-button label="Reset" severity="secondary" [fluid]="false" class="flex-1"></p-button>
                    </div>
                </div>
            </div>
            <div class="h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>
            </p-fluid>
    </div>
    </div>

    <style>
        @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
            animation: blob 7s infinite;
        }
    </style>
    `,
})
export class FormLayoutDemo {
    dropdownItems = [
        { name: 'Delhi', code: 'India' },
        { name: 'Noida', code: 'India' },
        { name: 'Gurugram', code: 'India' }
    ];

    dropdownItem = null;
}
