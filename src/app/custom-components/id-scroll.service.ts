

export class IdScrollService {

  constructor() { }

  scrollTo(el) {

    if((el instanceof Element)){
      console.log("Dinne");
      el.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else{
      setTimeout(() => {
        document.getElementById(el).scrollIntoView({block: 'start', behavior: 'smooth'});
      },50)

    }
  }
}
