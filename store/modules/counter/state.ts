import {Counters} from 'INTERFACES/counter'

import FirstGlobalState from 'CLASSES/FirstGlobalState.class'
const fgs = new FirstGlobalState();

export const state: Counters = fgs.getCounters();
