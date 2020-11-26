# SVGR React Native Demo

------

This demo shows off Icons code generation using SVGR CLI from multiple SVG assets.

[TOC]

## Setup

This project uses blank React Native Typescript Template generated with:

```
npx react-native init <PROJECT_NAME> --template react-native-template-typescript
```

All we need to do to setup SVGR is to create two config files:

1. `.svgrrc.js` - contains SVGR configuration, can be written in `.yml` format also
2. `.svgo.yml` - contains SVGO configuration. SVGO is underlying SVG optimizer tool.

### Configuration

`.svgrrc.js` - Read more about all possible options in the [docs](https://react-svgr.com/docs/options/)

```js
module.exports = {
  icon: false, // sets default width and height to be 1em, not usefull in rn
  native: true,
  typescript: true,
  dimensions: false, // removes initial width and height
  expandProps: 'end', // where to place props passed to icon
  ref: true, // use React.forwardRef()
  memo: true, // use React.memo()
  svgProps: { // default svg props
    width: 46,
    height: 46,
    fill: '#000',
  },
};
```



`.svgo.yml` - Read more about SVGO config in the [docs](https://github.com/svg/svgo#what-it-can-do)

```yaml
plugins:
  removeAttrs:
    attrs: 'path:fill' # remove fill attribute from generated <Path />
  sortAttrs: true # improves readability
  removeXMLNS: true 
```



`package.json` script that uses above config

```json
{
  "scripts": {
    "icons": "npx @svgr/cli -d src/icons assets"
  }
}
```



Lets break it down - `npx @svgr/cli -d <OUTPUT_DIR> <INPUT_DIR>`.

## Usage

1. Place all svg assets into specified assets folder
2. Run `yarn icons` or `npm run icons`
3. Use generated Icon Components e.g. `<Icon width={30} height={30} fill="red" />` :tada:



## Notes for icon designers

Although SVGR does a great job at converting asset svg names to ComponentNames its important to note that icon naming inside Figma is critical.

Therefore please **avoid any special characters in icon names except '-'**.
