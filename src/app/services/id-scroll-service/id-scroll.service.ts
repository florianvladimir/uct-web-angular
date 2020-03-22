export class IdScrollService {

  constructor() {
  }

  scrollTo(el: string, scrollBehavior: any) {
    if (!el) {
      setTimeout(() => {
        document.getElementById('perspective').scrollTo({top: 0, behavior: scrollBehavior});
      }, 50);
    } else {
      setTimeout(() => {
        document.getElementById(el).scrollIntoView({block: 'start', behavior: scrollBehavior});
      }, 50);
    }

  }
}
