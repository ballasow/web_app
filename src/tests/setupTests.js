import '@testing-library/jest-dom'
import { beforeAll, afterAll, afterEach } from 'vitest'

// Basic test setup. Start the MSW server globally so all tests can use the
// shared handlers in `src/tests/msw/handlers.js`.
// Wrap in try/catch to avoid breaking the test run if MSW isn't available in
// some environments (we'll log a warning instead).
try {
	// msw server wrapper exports `server` from src/tests/msw/server.js
	// which uses `msw/node` under the hood. Use top-level await so the
	// lifecycle hooks are registered before tests run.
	// eslint-disable-next-line import/no-unresolved
	const { server } = await import('./msw/server')

	beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())
} catch (e) {
	// If MSW import or startup fails, log a warning but don't throw — this
	// keeps the test environment resilient and allows selective tests to
	// opt-in to MSW manually if needed.
	// eslint-disable-next-line no-console
	console.warn('MSW global setup failed to start:', e && e.message ? e.message : e)
}
