1. npm i -g preact-cli 
2. npx preact-cli create typescript %name%
3. Add graphql and appollo client supprt > yarn add @apollo/client graphql-tag   
4. Add Material UI
   a.yarn add preact-compat
   b.yarn add @mui/material @emotion/react @emotion/styled
   c.add webpack.config.js with aliasing
       module.exports = {
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        },
    }
}
  d. Tree Shake Items
     Material UI
     add to preact.config.js
     export default {
     plugins: [
        [
            'babel-plugin-import',
            {
                libraryName: '@mui/material',
                libraryDirectory: '',
                camel2DashComponentName: false,
            },
            'core',
        ],
        [
            'babel-plugin-import',
            {
                libraryName: '@mui/icons-material',
                libraryDirectory: '',
                camel2DashComponentName: false,
            },
            'icons',
        ],
    ],
}
    
      Analyze Package confirm package size
       preact build --analyze 
        notice apollo client size large
        need to reduc this using alias and direct imports; forgety that switch to graphl-ql or graphql-request > this reduced from 600k to 200k
        
    Theme it up
    https://bareynol.github.io/mui-theme-creator/#Buttons
    app.tsx wrap with theme
    <ThemeProvider theme={themeOptions}>
    export const themeOptions= createTheme( {
  palette: {
      primary: {
      main: '#0080ff',
      light: '#0080ff',
      dark: '#0080ff',
    },
    secondary: {
      main: '#f50057',
    },
  },
})
    
  
