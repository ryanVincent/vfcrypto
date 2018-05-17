# Description

An app for tracking the price of the top ten crypto currencies. It can be found at: https://vfcrypto.herokuapp.com/

# Installation

To run locally, clone this repo and run the following: 

```sh
npm i
npm start
```

# Notes

I spent a little longer than the recommended time on this test for the following reasons: 

  * I wanted to test out styled-components (something I've never used before)
  * I felt it was a more interesting technical test than some others I've carried out
  * I wanted to try out some new React 16 features such as context api
  
I've neglected to do a few things that I'd do under professional circumstances

* I've omitted the Currency selection feature for now as I didn't have a mapping from currency type to symbol/pre(suf)fix location
* I used a color picker to grab colors from pngs provided, and generally hard coded lots of theme variables. Normally, I'd seek confirmation from UI/UX or reach for a defined theme before styling. 
* I've not added Redux (Context API is not a suitable replacement!)
* I've not used selectors or any kind of property getters
* I've not hosted the svgs and am relying on a third party.
