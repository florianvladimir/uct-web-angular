
export class ReloadHomeService {

  reload = false;

  constructor() {

  }

  shouldReload(){
    this.reload = true;
  }

  getIfMustReload(){
    return this.reload;
  }
}
