import {Liqpayes} from 'INTERFACES/liqpay'

import FirstGlobalState from 'CLASSES/FirstGlobalState.class'
const fgs = new FirstGlobalState();


export const state: Liqpayes = fgs.getLiqpay();
