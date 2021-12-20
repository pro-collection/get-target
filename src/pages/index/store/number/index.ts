import { atom } from 'recoil';

const numberAtom = atom<number>({
  key: 'index-store-number',
  default: 0,
});

export default numberAtom;
