module.exports = {
  "presets": [
  "@babel/preset-env"
],
  "overrides": [
{
 "test": "*.vue",
 "presets": [
   [
     "@vue/app"
   ]
 ]
},
{
 "test": "**/*.jsx",
 "presets": [
   "@babel/preset-react"
 ]
}
]
}