import { loadStore } from './store';

export type RootStore = typeof loadStore;

export type RootState = ReturnType<typeof loadStore.getState>;

export type AppDispatch = typeof loadStore.dispatch;
