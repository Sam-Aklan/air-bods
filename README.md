
# Air Bods ✨

A modern React application with Framer Motion animations and FFmpeg video processing.

## Tech Stack

- ⚛️ React 19
- 🦾 TypeScript
- ⚡ Vite
- 🎞️ Framer Motion
- 🎥 FFmpeg

## FFmpeg Video Processing

Process videos into WebP images with this optimized command:

```bash
ffmpeg -i video.mp4 -vf scale=1000:-1 -vcodec libwebp -compression_level 1 -qscale 80 %d.webp

Detailed Explanation
Input/Output
-i video.mp4
Specifies the input video file (replace video.mp4 with your filename)

Video Filtering
-vf scale=1000:-1

-vf applies video filters

scale=1000:-1 resizes the width to 1000px while automatically calculating height to maintain aspect ratio

Encoding
-vcodec libwebp
Sets the output format to WebP using libwebp encoder

Compression
-compression_level 1

Controls speed vs. compression quality

1 = fastest encoding (range: 0-6, where 6 is slowest but most compressed)

Quality
-qscale 80

Sets visual quality (range: 0-100)

80 provides excellent quality with reasonable file size

Output
%d.webp
Generates sequentially numbered files:
1.webp, 2.webp, 3.webp, etc

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
