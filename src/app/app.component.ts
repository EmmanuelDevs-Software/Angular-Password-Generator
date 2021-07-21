import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public inputLength = 0;
  public password = '';
  public includeLetters = false;
  public includeNumbers = false;
  public includeSymbols = false;
  constructor() { }

  public onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = "!@#~€¬()=?¿";

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.inputLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  public onChangeUseLetters(ev) {
    ev.preventDefault();
    this.includeLetters = !this.includeLetters;
  }


  public onChangeUseNumbers(ev) {
    ev.preventDefault();
    this.includeNumbers = !this.includeNumbers;
  }


  public onChangeUseSymbols(ev) {
    ev.preventDefault();
    this.includeSymbols = !this.includeSymbols;
  }

  public onChangeLenght(ev) {
    const getInputvalue = parseInt(ev.target.value);
    this.inputLength = getInputvalue;
    console.log('length', this.inputLength)
  }
}
