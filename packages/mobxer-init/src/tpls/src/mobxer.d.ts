interface IGlobalStore {
  user: import('./shared/stores/user');
  auth: import('./shared/stores/auth');
}

interface NxStatic {
  $root: IGlobalStore;
}
