# Project Changes & Deployment Setup

## 📋 Changes Made to Configure GitHub Pages

### Date: October 28-29, 2025

This document outlines all the changes made to configure this portfolio for GitHub Pages deployment.

---

## ✨ Changes Summary

### 1. **Fixed Build Configuration** ⚠️ (Critical Fix)
**Problem:** The site was showing a blank page because Parcel was generating absolute paths in the build output.

**Solution:** Updated the build script in `package.json`:
```json
"build": "parcel build index.html --public-url ./"
```

**What this does:** 
- Generates relative paths (e.g., `href=file.css`) instead of absolute paths (e.g., `href=/file.css`)
- Ensures assets load correctly on GitHub Pages
- Makes the build work both locally and on GitHub Pages

### 2. **Updated .gitignore**
Added the `/dist` folder to `.gitignore` to prevent committing build artifacts:
```
# build output
/dist
```

### 3. **Enhanced README.md**
- Added comprehensive project description
- Included installation and build instructions
- Added deployment guide with step-by-step instructions
- Documented project structure
- Added tech stack information

### 4. **Simplified Deployment Strategy**
**Decision:** Chose manual deployment over automatic GitHub Actions workflow.

**Why:** Simpler setup, direct control over deployments, no additional configuration needed.

**Removed:**
- `.github/workflows/deploy.yml` (GitHub Actions workflow)

**Kept:**
- Existing `gh-pages` package in `package.json`
- Simple deploy script: `npm run deploy`

---

## 🚀 How to Deploy This Site

### Prerequisites
- Node.js installed on your machine
- Git configured with GitHub access
- Repository already exists at `arya-ankita.github.io`

### First-Time Setup

1. **Clone the repository (if not already done):**
   ```bash
   git clone https://github.com/arya-ankita/arya-ankita.github.io.git
   cd arya-ankita.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Test locally (optional but recommended):**
   ```bash
   npm start
   ```
   Visit `http://localhost:1234` to preview your site

4. **Build and deploy:**
   ```bash
   npm run deploy
   ```
   
   This command will:
   - Run `npm run build` (via the `predeploy` script)
   - Build your project with Parcel
   - Push the `dist` folder to the `gh-pages` branch
   - Output a success message

5. **Configure GitHub Pages (one-time setup):**
   - Go to https://github.com/arya-ankita/arya-ankita.github.io
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source:** Deploy from a branch
     - **Branch:** gh-pages
     - **Folder:** / (root)
   - Click **Save**

6. **Wait 1-2 minutes for deployment**

7. **Visit your live site:**
   - https://arya-ankita.github.io

### Updating Your Site

Whenever you make changes and want to deploy:

1. **Make your code changes**

2. **Test locally:**
   ```bash
   npm start
   ```
   Visit http://localhost:1234

3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

That's it! Your changes will be live in 1-2 minutes.

---

## 🔍 Technical Details

### Package.json Scripts
```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --public-url ./",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

- **start:** Runs development server with hot reload at localhost:1234
- **build:** Creates production build with relative paths
- **predeploy:** Automatically runs before deploy
- **deploy:** Pushes dist folder to gh-pages branch

### Why `--public-url ./`?
Without this flag, Parcel generates paths like `/assets/file.js` which look for files at the domain root. With it, paths become `./assets/file.js` (relative), which work correctly when GitHub Pages serves your site.

### Deployment Flow
```
npm run deploy
    ↓
predeploy runs → npm run build
    ↓
parcel build index.html --public-url ./
    ↓
Creates /dist folder with built files
    ↓
gh-pages -d dist
    ↓
Pushes dist/ to gh-pages branch
    ↓
GitHub Pages serves from gh-pages branch
    ↓
Site live at arya-ankita.github.io
```

---

## 🛠️ Project Structure

```
arya-ankita.github.io/
├── src/
│   ├── components/
│   │   ├── About.js           # About section
│   │   ├── Contact.js         # Contact section
│   │   ├── Header.js          # Navigation header
│   │   ├── Welcome.js         # Hero section
│   │   └── Work.js            # Projects section
│   └── App.js                 # Main React component
├── dist/                      # Build output (gitignored)
├── index.html                 # HTML entry point
├── index.css                  # Global styles
├── package.json               # Dependencies & scripts
├── .gitignore                 # Ignored files
├── README.md                  # Project documentation
├── CHANGES.md                 # This file
└── LICENSE                    # License file
```

---

## 🐛 Troubleshooting

### Blank Page Issue (The Problem We Fixed)
**Symptom:** Site loads but shows blank page, console shows 404 errors for CSS/JS files.

**Cause:** Absolute paths in build output don't work on GitHub Pages.

**Solution:** Fixed with `--public-url ./` flag in build script.

**To verify the fix:**
```bash
npm run build
```
Check `dist/index.html` - paths should be relative like `href=file.css` not `href=/file.css`

### Deploy Command Fails
**Check:**
1. Are dependencies installed? Run `npm install`
2. Does build work locally? Run `npm run build`
3. Is Git configured? Check `git config --list`

### Site Not Updating After Deploy
1. **Clear browser cache:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Wait a few minutes:** GitHub Pages can take 1-5 minutes to update
3. **Verify gh-pages branch:** Check if it exists and was updated recently

### Build Errors
If `npm run build` fails:
1. Delete `node_modules` and `.parcel-cache` folders
2. Run `npm install` again
3. Try building again

### GitHub Pages Settings
Ensure correct settings in Settings → Pages:
- **Source:** Deploy from a branch
- **Branch:** gh-pages
- **Folder:** / (root)

---

## � Technical Notes

- **Homepage URL:** Configured in package.json as `https://arya-ankita.github.io`
- **Build Tool:** Parcel v2.16.0
- **React Version:** v19.2.0
- **Deployment Package:** gh-pages v6.3.0
- **Code Branch:** main
- **Deployment Branch:** gh-pages (auto-created by gh-pages package)

---

## 🎯 Quick Reference Commands

**Deploy site:**
```bash
npm run deploy
```

**Test locally:**
```bash
npm start
```

**Build without deploying:**
```bash
npm run build
```

**Install dependencies:**
```bash
npm install
```

**Site URL:** https://arya-ankita.github.io

---

*Last updated: October 29, 2025*
