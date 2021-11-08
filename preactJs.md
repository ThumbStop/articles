1. npm i -g preact-cli 
2. npx preact-cli create typescript %name%
3. Add graphql and appollo client supprt > yarn add @apollo/client graphql-tag   
4. Add Material UI
   a.yarn add preact-compat
   b.yarn add @mui/material @emotion/react @emotion/styled
   c.add webpack.config.js with aliasing
          {
        "resolve": {
            "alias": {
                "react": "preact-compat",
                    "react-dom": "preact-compat"
            }
        }
    }


  
