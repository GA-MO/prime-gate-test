# prime-gate-test

Throwaway repository with fake code. It proves which merge gates of the prime process (§5) GitHub can enforce.
No client data, no real names, no secrets.

- `src/` fake app code
- `tests/locked/` tests that only the code owner may change
- `db/migrations/` schema changes that need the code owner
- `.github/` CI and gate definitions, code-owner only
