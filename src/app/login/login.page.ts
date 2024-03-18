import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/services/toast.service';
import { UserService } from 'src/services/user.service';
import { NativeBiometric, BiometryType } from "capacitor-native-biometric";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  dadosFrase = this.createForm();
  frases:any;

  constructor(private fBuilder: FormBuilder, private toast: ToastService, private loadingCtrl: LoadingController, private userService: UserService, private router: Router) { }


  OnInit(){
    this.allfrases();
  }

  async performBiometricVerificatin(){
    const result = await NativeBiometric.isAvailable();

    if(!result.isAvailable) return;

    const isFaceID = result.biometryType == BiometryType.FACE_ID;

    const verified = await NativeBiometric.verifyIdentity({
      reason: "For easy log in",
      title: "Log in",
      subtitle: "Maybe add subtitle here?",
      description: "Maybe a description too?",
    })
      .then(() => true)
      .catch(() => false);

    if(!verified) return;

    const credentials = await NativeBiometric.getCredentials({
      server: "www.example.com",
    });
  }


  chec(e:any){
    console.log(e);

  }

allfrases(){
  this.userService.allFrases().subscribe((data:any)=>{
    console.log(data);
    this.frases = data.list;
  })
}



















//   async sendDados(){
//     const loading = await this.loadingCtrl.create({
//       message: 'Loading...',
//       duration: 3000,
//       cssClass: 'custom-loading',
//     });

//     loading.present();
// this.userService.siginUser(this.getSalvarRgPayload()).subscribe((data:any)=>{
//   console.log(data);
//   if(data.error === false){
//     this.toast.showSucess('Login relizado');
//     this.dadosUser.reset()
//     this.router.navigate(['folder']);
//   }else{
//     this.toast.showError('email/senha inválidos');
//   }
// })
//   }



  private createForm() {
    return this.fBuilder.nonNullable.group({
      author: ['', Validators.required],
      txt: ['', Validators.required],
    });
  }

  private getSalvarRgPayload() {
    const form = this.dadosFrase.getRawValue();
    return {
      author:form.author,
      txt:form.txt,

    };
  }
  sendFrase() {
    const payload = JSON.stringify(this.getSalvarRgPayload());
    console.log(this.getSalvarRgPayload());
    this.userService.newFrase(payload).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
