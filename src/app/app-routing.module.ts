import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './sandbox/sandbox.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '/',
    component: AppComponent,
  },
  {
    path: 'sandbox',
    component: SandboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
