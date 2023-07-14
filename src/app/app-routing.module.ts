import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxPage } from './pages/sandbox/sandbox.page';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'sandbox',
    component: SandboxPage,
  },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
