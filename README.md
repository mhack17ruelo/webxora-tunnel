# WEBXORA TUNNELING

Secure Tunnel and Remote Access Monitoring — a responsive, frontend-only operations dashboard built with React, TypeScript, Vite, Lucide, and Recharts.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Demo credentials:

- Email: `john.regala@gmail.com`
- Password: `webxora2025`

Build validation: `npm run build`.

## Mock-only safety

This version never contacts Cloudflare, SSH, RDP, Tailscale, AnyDesk, MySQL, or operating-system services. Controls use short simulated delays, persist harmless UI state to LocalStorage, and create local audit entries. The password is compared in memory and is never written to LocalStorage.

## Architecture and future integration

Typed mock datasets live in `src/mocks`; replaceable service boundaries live in `src/services`. A production backend should use a least-privilege local monitoring agent to collect sanitized status and expose it through authenticated API endpoints. Authentication should move to secure HTTP-only cookies with CSRF protection, rate limiting, RBAC, MFA, session expiry, request validation, encrypted secrets, IP allowlists, and server-side audit storage.

Future adapters can implement Cloudflare Tunnel and `cloudflared` status, Windows RDP/OpenSSH service health, Tailscale and AnyDesk status, Node health endpoints, MySQL health checks, and gradual CPU/memory/storage/network telemetry without redesigning the pages. Never send private keys, tunnel credentials, passwords, or provider tokens to the browser.

## QA checklist

- Correct and incorrect login; protected-route redirect; logout; session persistence
- Tunnel start, stop, restart, refresh, confirmation, and audit creation
- Remote-service enable/disable and confirmation
- Search, filters, pagination, and CSV export
- Settings and theme persistence
- Responsive sidebar, tables, cards, charts, dialogs, and reduced-motion behavior
- Keyboard focus, labeled inputs, Escape/click-outside modal close, readable status text

All addresses and data are documentation-safe mocks. `.env.example` contains placeholders only.
