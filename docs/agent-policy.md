# Antigravity IDE — Agent Guidance & Code Quality Manifest

**Purpose:**
This document instructs your Antigravity IDE agent how to produce clean, secure, consistent, modern, and production-ready websites and services — with automatic GitHub syncing on updates — while respecting your visual rules (no "AI" icons or "AI" colours), applying strict security and QA checks, and selecting the best framework for each project.

---

## 1. High-level agent responsibilities

* **Deliver clean, modular code**: Produce readable, well-documented, and idiomatic code in the chosen stack.
* **Project structure & conventions**: Create and maintain a consistent folder layout, naming conventions, and file structure across projects.
* **Visual policy enforcement**: Never use 'AI' branded icons or stereotypical "AI colours." Always use realistic, modern palettes and real icon assets (SVGs or trusted icon libraries). Confirm with automated checks.
* **Automated quality gates**: Before any commit/push, run linters, unit/integration tests, type checks, build, accessibility, and security scans. Fail the operation if any gate fails.
* **GitHub sync on update**: Commit changes with meaningful conventional commit messages and push to the configured remote. Trigger GitHub Actions pipeline on push.
* **Security-first**: Enforce front-end and back-end security best practices, dependency scanning, secrets handling, and infrastructure hardening.
* **Framework selection**: Use a decision algorithm to pick the best framework for the product goals (detailed in section 5).

---

## 2. Agent coding skills checklist (features the agent must possess)

1. **Language & tooling mastery**: TypeScript, JavaScript, HTML, CSS/Sass/Tailwind, plus at least one backend language (Node/TS, C#/.NET, Python, or Go). Must know build tools (Vite, Webpack), package managers (npm, pnpm, yarn).
2. **Modern frameworks**: React + Next.js, Vue + Nuxt, SvelteKit, Blazor (if requested), NestJS, Express, .NET WebAPI, Django/FastAPI, or Go HTTP frameworks.
3. **Testing**: Unit (Jest, xUnit), integration, and E2E (Playwright, Cypress). Snapshot and visual regression testing.
4. **Security**: OWASP Top 10 mitigation, input validation, parameterized queries, CSP, secure headers, HTTPS/TLS, HSTS, proper CORS rules, rate limiting, account lockouts.
5. **DevOps & CI/CD**: Git, GitHub Actions, Docker, container security, deployment orchestration (Kubernetes/Helm optional), IaC (Terraform/CloudFormation) basics.
6. **Code quality**: ESLint, Prettier, Stylelint, .editorconfig, type checking, Pre-commit hooks (husky), commitlint.
7. **Dependency & secrets**: Dependabot/Snyk/GitHub Advanced Security, pinned versions, GitHub Secrets, vaults for production secrets.
8. **Accessibility & UX**: aria attributes, color contrast checks, keyboard navigation, automated axe checks.
9. **Design assets**: Use vetted icon libraries and properly optimized SVGs; know vector editing best practices and naming.

---

## 3. Folder & file structure (single-file projects and monorepo examples)

### Opinionated monorepo structure (recommended for multi-app projects)

```
/ (repository root)
  README.md
  LICENSE
  .editorconfig
  .gitignore
  package.json (or workspace manifest)
  tsconfig.json
  /apps
    /web-client (Next.js or SvelteKit app)
      package.json
      next.config.js
      /public
      /src
        /components
        /pages (or /routes)
        /styles
        /icons
        /utils
    /api (NestJS / Express / .NET)
      package.json (or csproj)
      /src
        /controllers
        /services
        /models
        /middlewares
  /packages
    /ui (shared React components)
    /design-system (tokens, colors)
    /auth (shared auth helpers)
  /infra
    /k8s (helm charts)
    /terraform
  /scripts
  .github/workflows/ci.yml
  .github/workflows/deploy.yml
```

### Minimal single-app structure (v1 website)

```
/
  README.md
  package.json
  src/
    index.tsx
    App.tsx
    styles/
    components/
    icons/
  public/
  .eslintrc.cjs
  .prettierrc
  tsconfig.json
  Dockerfile
  .github/workflows/ci.yml
```

**File naming rules:** kebab-case for files and folders, PascalCase for React components, camelCase for variables and functions.

---

## 4. Commit, branch & GitHub rules (auto-sync behavior)

* **Branch strategy**: `main` (protected), `develop`, feature branches `feat/<short-desc>`, hotfix `fix/<short-desc>`.
* **Commit messages**: Use Conventional Commits (e.g., `feat(auth): add refresh token flow`).
* **Auto-commit rules for agent**:

  * Every meaningful code change must be a single logical commit.
  * Run pre-commit hooks and quality gates locally before commit.
  * Push to remote branch; if main changes, open a pull request and require at least one review.
  * Use Co-authored-by tag when multiple agents collaborate.
* **GitHub Actions**: Each push triggers CI which runs lint, typecheck, tests, build, dependency scan, and deploy (if allowed).

---

## 5. Framework selection algorithm

Agent must evaluate per-project and choose the best framework using this decision matrix (scoring):

* **Product type**: marketing site, complex SPA, multi-tenant SaaS, content site, server-rendered app.
* **Performance need**: SSR/SSG needed? (score higher for Next.js/Vercel or SvelteKit)
* **Developer velocity**: preference for TypeScript + strong ecosystem (React/Next.js or Vue/Nuxt).
* **Hosting & infra**: static hosting (Netlify/Vercel) vs serverful (K8s/VMs).
* **Existing skills**: if user requested Blazor or .NET, weigh .NET higher.

**Recommended defaults** (unless requirements force otherwise):

* **Modern multi-page webapp / SaaS**: Next.js + React + TypeScript, API served by NestJS (TypeScript) or Next API routes for small services.
* **Static marketing sites**: Next.js SSG or Astro.
* **Realtime / low-latency**: Node + Fastify or Go backend; websockets via Socket.IO or native ws.
* **Enterprise / government**: .NET 8 WebAPI + Blazor (if heavy .NET integration required) — with explicit security controls.

---

## 6. Visual & icon policy (must enforce)

1. **No AI-branded icons or 'robot/brain' AI visuals** unless explicitly requested. The agent must avoid iconography or stock assets labeled "AI".
2. **Use real, modern icons**: Heroicons, Lucide, Feather, Material Icons, Font Awesome (licensed), or custom hand-tuned SVGs. Prefer inline SVGs for performance.
3. **Color palette**: Use realistic, muted, and modern palettes — avoid neon/glossy "AI" palettes. Use the project's design system tokens. Provide at least 3 accessible contrast-safe palettes and pick the one aligned with the brand.
4. **Icon accessibility**: Provide `aria-hidden` or `role` attributes where appropriate and include an accessible label when icon conveys meaning.
5. **Icon optimization**: Compress SVGs, remove unnecessary metadata, minify path data.

---

## 7. Quality gates & "after every prompt" validation

After each agent prompt that changes code, the agent must run the following pipeline locally and in CI:

1. **Static analysis**: ESLint, TypeScript typecheck.
2. **Formatting**: Prettier (auto-fix where possible).
3. **Unit tests**: Must pass; coverage threshold enforced (80%).
4. **Integration/E2E tests**: If present, run Playwright/Cypress scenarios.
5. **Accessibility checks**: Axe automation or Playwright-axe.
6. **Visual regression**: Optional for UI-heavy changes.
7. **Dependency & vulnerability scan**: Snyk or GitHub code scanning.
8. **Security linters**: Node audit, semgrep rules for common insecure patterns.
9. **Build & smoke run**: Build the app and run a local smoke test.
10. **Icon & palette check**: Ensure no blocked assets/colors were introduced.

---

## 8. Front-end security checklist

* Use CSP headers and a strict policy.
* Escape user-generated content and use safe templating.
* Sanitize HTML inputs.
* Enforce HTTPS and HSTS.
* Enable secure cookies (`HttpOnly`, `Secure`, `SameSite=strict`).
* Implement CSRF protection.
* Avoid exposing secrets in the front-end.
* Implement client-side rate limiting where applicable.

---

## 9. Back-end security checklist

* Use parameterized queries or ORM.
* Validate all inputs (whitelist approach).
* Implement robust authentication/authorization.
* Store secrets in a secure vault.
* Use RBAC and least privilege.
* Audit logging.
* Implement DDoS protections and rate limiting.
* Keep dependencies up to date.
* Harden server images.

---

## 10. CI/CD, secrets & deployment

* **GitHub Actions**: `ci.yml` and `deploy.yml`.
* **Secrets**: Use GitHub Secrets; never commit `.env`.
* **Pre-merge checks**: Block merge if failures exist.
* **Automatic deploy**: Deploy only from `main`.
* **Rollback**: Enable quick rollback.
* **Immutable infrastructure**: Prefer versioned container images.

---

## 11. Dependency & third-party policy

* Vet packages before adding.
* Prefer small, well-maintained libraries.
* Pin versions and run audit.
* Use Dependabot.

---

## 12. Pre-commit & local developer experience

* Install `husky` + `lint-staged`.
* Provide `.editorconfig` and workspace settings.
* Offer `dev`, `test`, `build`, `lint`, and `format` scripts.

---

## 13. Monitoring, observability & post-deploy checks

* Instrument with structured logs and traces.
* Expose health-check endpoints.
* Monitor error rates and latency.
* Integrate Sentry for runtime error tracking.

---

## 14. Agent fail-safe & security posture

* **Sandboxed execution**: Run builds/tests in containers where possible.
* **Network-egress policy**: Limit outbound access during build.
* **Dependency verification**: Use lockfiles.
* **Human-in-the-loop**: Require approval for sensitive actions.

---

## 15. Enforced rules (non-negotiable)

1. **Never** use AI-branded icons or colours.
2. **Always** run automated quality gates and stop on failure.
3. **Never** commit secrets to version control.
4. **Always** use secure default headers and CSP.
5. **Always** pin dependencies and run SCA.
6. **Always** document framework selection and design decisions.
7. **Always** require at least one human reviewer before merging into `main`.

---

**End of manifest.**
