
# air-bods
react, framer motion, ffmpeg
=======
# React + TypeScript + Vite

#ffmpeg
use the ffmpeg open source tool to cut dowin video
into images

* ffmpeg -i video.mp4 -vf scale=1000:-1 -vcodec libwebp -compression_level 1 -qscale 80 %d.webp

ffmpeg
Invokes the FFmpeg tool.

-i video.mp4
Specifies the input file (video.mp4).

-vf scale=1000:-1

-vf applies a video filter.

scale=1000:-1 resizes the video width to 1000 pixels while maintaining the aspect ratio (the -1 automatically calculates the height).

-vcodec libwebp
Sets the video codec to libwebp, which encodes the output as WebP images.

-compression_level 1

Controls the speed vs. compression efficiency of WebP encoding.

1 means fastest encoding (but lower compression).

Range: 0 (fastest) to 6 (slowest but best compression).

-qscale 80

Sets the quality level for WebP (similar to JPEG's quality setting).

Range: 0 (worst) to 100 (best).

80 is a good balance between quality and file size.

%d.webp

Output filename pattern:

%d generates sequential numbers (1.webp, 2.webp, etc.)
===

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
