// Provide a minimal localStorage mock for the test environment (node/jsdom may not provide it)
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => (Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null),
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

globalThis.localStorage = globalThis.localStorage || localStorageMock;

import { describe, it, expect, beforeAll } from 'vitest';

let reducer, setUserInfo, logoutUser, loginUser;

beforeAll(async () => {
  // Import the slice after localStorage is mocked to avoid ReferenceError during module eval
  const mod = await import('./userSlice');
  reducer = mod.default;
  setUserInfo = mod.setUserInfo;
  logoutUser = mod.logoutUser;
  loginUser = mod.loginUser;
});

describe('userSlice reducers', () => {
  it('should set user info via setUserInfo', () => {
    const prevState = undefined; // use default initial state
    const action = setUserInfo({ id: 1, name: 'Alice', role: 'student' });
    const next = reducer(prevState, action);
    expect(next.userInfo).toEqual({ id: 1, name: 'Alice', role: 'student' });
    expect(next.role).toBe('student');
  });

  it('should clear state on logoutUser', () => {
    const prev = {
      userInfo: { id: 2, name: 'Bob' },
      token: 'tok',
      role: 'teacher',
      isLoading: false,
      error: null,
      user_SidebarActive: false,
    };
    const next = reducer(prev, logoutUser());
    expect(next.userInfo).toBeNull();
    expect(next.token).toBeNull();
    expect(next.role).toBeNull();
  });

  it('should handle loginUser.fulfilled', () => {
    const action = {
      type: loginUser.fulfilled.type,
      payload: { token: 'abc123', role: 'admin', user: { id: 3, name: 'Carol' } }
    };
    const next = reducer(undefined, action);
    expect(next.token).toBe('abc123');
    expect(next.role).toBe('admin');
    expect(next.userInfo).toEqual({ id: 3, name: 'Carol' });
    expect(next.isLoading).toBe(false);
  });
});
