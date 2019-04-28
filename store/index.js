import Vuex from 'vuex'
import createPersistedState from "vuex-createPersistedState";

export const plugins = [
    createPersistedState(),
]