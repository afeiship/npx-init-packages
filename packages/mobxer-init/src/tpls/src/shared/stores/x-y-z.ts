import { makeAutoObservable } from 'mobx';

export default class XyzStore {
  static storeKey = 'special';
  special = 'special var';

  constructor() {
    makeAutoObservable(this);
  }
}
