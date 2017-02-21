import {Selectboxes} from 'INTERFACES/selectbox'

import FirstGlobalState from 'CLASSES/FirstGlobalState.class'
const fgs = new FirstGlobalState();


export const state: Selectboxes = fgs.getSelectboxes();
