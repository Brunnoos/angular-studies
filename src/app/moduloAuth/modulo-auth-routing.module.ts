import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { SignUpComponent } from "./signup/signup.component";
import { SignInComponent } from "./signin/signin.component";

const routes: Routes = [
    {
        path: '',
        component: OnboardingComponent,
        children: [
            { path: 'signup', component: SignUpComponent },
            { path: 'signin', component: SignInComponent }
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}