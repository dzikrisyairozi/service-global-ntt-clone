import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: '/',
  //   component: AppComponent,
  // },
  {
    path: 'sandbox',
    component: SandboxComponent,
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
