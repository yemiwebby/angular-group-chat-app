import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupScreenComponent } from 'src/lib/cometchat-angular-ui-kit/src/lib/group-screen/group-screen.component';
// import { GroupScreenComponent } from 'src/lib/cometchat-angular-ui-kit/src/lib/group-screen/group-screen.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'group-chat-view',
    component: GroupScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
