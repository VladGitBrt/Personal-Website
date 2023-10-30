import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextTypingService {

  constructor() { }

  public animateText(textEl: ElementRef<HTMLElement>): void {
    const words = ["Coding", "Angular", "JavaScript", "Front-End"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        textEl.nativeElement.textContent = currentChar;
        textEl.nativeElement.classList.add("stop-blinking");
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            textEl.nativeElement.classList.remove("stop-blinking");
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            setTimeout(typeEffect, 1200);
        }
    }
    typeEffect();
  }
}
