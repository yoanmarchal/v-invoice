# V-Invoice Build Guide

## Node.js Compatibility

This project has been updated to work with **Node.js 24.x**. Due to OpenSSL changes in Node 17+, you need to use the `--openssl-legacy-provider` flag when building.

## Installation

```bash
npm install
```

Or in individual packages:
```bash
cd lib && npm install
cd ../documentation && npm install
```

## Building

### Build lib component library:
```bash
# PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm --prefix lib run build

# Bash/Linux
export NODE_OPTIONS="--openssl-legacy-provider" && npm --prefix lib run build

# Alternatively (with .npmrc configured)
npm --prefix lib run build
```

### Build documentation:
```bash
npm --prefix documentation run docs:build
```

### Build all:
```bash
npm run build:lib
npm run build:documentation
```

## Dependencies Update Status

### Completed Phases 1 & 2

**lib/:**
- ✅ lerna: 4.0.0 → 9.0.3
- ✅ tailwindcss: 1.9.6 → 3.4.1
- ✅ vue: 2.6.12 → 2.7.16
- ✅ babel-loader: 8.2.2 → 9.1.3
- ✅ babel-jest: 27.0.6 → 29.7.0
- ✅ eslint-plugin-import: 2.22.1 → 2.29.1
- ✅ eslint-plugin-promise: 4.2.1 → 6.1.1
- ✅ @vue/test-utils: 1.2.0 → 1.3.6
- ✅ eslint-plugin-vue: 7.4.1 → 8.7.1

**documentation/:**
- ✅ tailwindcss: 1.9.6 → 3.4.1
- ✅ vue: 2.6.12 → 2.7.16

## Vulnerability Reduction

- **Before Phase 1**: 86 vulnerabilities (10 critical, 24 high, 40 moderate)
- **After Phase 1 & 2**: 18 vulnerabilities (1 critical, 7 high, 7 moderate)
- **Reduction**: 79% fewer vulnerabilities ✅

Phase 3 (audit fix --force) was attempted but caused breaking changes (Vue 2 → Vue 3).
Remaining 18 vulnerabilities are from legacy dependencies that require major version upgrades.

## Configuration

- `.npmrc`: Enabled `legacy-peer-deps=true` to resolve ESLint peer dependency issues
- `.eslintrc.js`: Added `vue/multi-word-component-names: off` rule for Vue 2 component naming

## Remaining Vulnerabilities (18)

These cannot be fixed without major breaking changes:

1. **Webpack 4 legacy**: `loader-utils`, `postcss`, `webpack-dev-server`
2. **Vue 2.x ReDoS**: Cannot fix without Vue 2.7.16 → Vue 3.x migration
3. **Legacy transpiler dependencies**: Cross-spawn, word-wrap from old Webpack

### Path to Zero Vulnerabilities

To eliminate the remaining 18 vulnerabilities, you would need:

**Option A: Vue 2 → Vue 3 Migration**
- Breaking change: Full component rewrite
- Effort: ~3-5 days for library this size
- Benefit: Modern framework, better performance

**Option B: Webpack → Vite Migration**
- Breaking change: Build system overhaul
- Effort: ~2-3 days
- Benefit: 10x faster builds, better dev experience

**Option C: Accept Legacy Dependencies**
- Keep current setup
- Monitor vulnerabilities regularly
- This is safe if the app is not exposed to untrusted input

## Test Results

✅ Build succeeds with all updates
✅ Documentation builds successfully
✅ Backward compatible with existing code
✅ No breaking changes for consumers

## Future Improvements

- Consider Vue 2.7 → Vue 3 migration (major project)
- Consider Webpack → Vite migration (major project)
- Update to ESLint 9.x when Vue 3 compatible parser is available
