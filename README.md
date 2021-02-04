![Preview](https://raw.githubusercontent.com/cheems/GDIndex/master/images/preview.png)
# Google Drive Index + Dark mode
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) ![GitHub last commit](https://img.shields.io/github/last-commit/cheems/GDIndex) ![GitHub repo size](https://img.shields.io/github/repo-size/cheems/GDIndex) [![Generic badge](https://img.shields.io/badge/Author-cheems-blue.svg)](https://shields.io/)

Combining the power of [Cloudflare Workers](https://workers.cloudflare.com/) and [Google Drive](https://www.google.com/drive/) will allow you to index your files on the browser on Cloudflare Workers. 

This theme's goindex is currently based on [yanzai/goindex](https://github.com/yanzai/goindex/)
## Features
 
 - Video Player - | mp4 | webm | avi | mpg | mpeg | mkv | rm | rmvb | mov | wmv | asf | ts | flv
 - Music Player - | mp3 | flac | wav | ogg | m4a
 - Document Viewer - | html | php | css | go | java | js | json | txt | sh | md | pdf
 - Image Viewer - | bmp | jpg | jpeg | png | gif
 - Multi-level Search within default and team/shared drives
 - Multi drive encryption
 - Mobile Friendly
 - Page-level caching, browser forward and backward without reloading
 - Dark Theme
 - Main Color:
	 - red | pink | purple | deep-purple | indigo | blue | light-blue | 
   cyan    | teal | green | light-green | lime yellow | amber orange | 
   deep-orange | brown | greyblue-grey
  - Accent Color:
	  -   red | pink | purple | deep-purple | indigo | blue | light-blue | cyan | teal | green | light-green | lime | yellow | amber | orange | deep-orange

## Use your own credentials and data

* Open https://console.developers.google.com/apis/credentials
* After creating project or if you already have one.
* Click create credentials.
* Select OAuth client ID.
* Select Web application.
* Give it a name. (anything for your own reference)
* In Authorized JavaScript origins add https://developers.google.com
* In Authorized redirect URIs add https://developers.google.com/oauthplayground
* Save and note down your Client ID and Secret
* Open https://developers.google.com/oauthplayground
* On Right Top Side click on Setting Icon ![](https://developers.google.com/oauthplayground/assets/images/settings.png)
* Click on Use your own OAuth credentials.
* Enter OAuth Client ID: and OAuth Client secret:
* Now back to same page https://developers.google.com/oauthplayground left side Step 1 i.e. Select & authorize APIs
* Find Drive API v3
* Select First Option i.e. https://www.googleapis.com/auth/drive
* Click on Authorize API. and give permissions using your google account.
* It will turn to Step 2 Exchange authorization code for tokens at the end of authentication.
* Click on Exchange authorization code for tokens, if it goes to step 3, click on Step 2 yourself.
* Select the option Auto-refresh the token before it expires.
* Copy the refresh token and paste in Line 8 of https://github.com/cheems/GDIndex/blob/master/index.js along with your own Client ID and Secret at Line 6 and Line 7.
* Copy the Code and paste it into https://workers.cloudflare.com Site.

### Extra Options
``` js
const uiConfig = {
  .......
  "hide_madewithlove": false, // Set this to true if you want to hide made-with-love text at the bottom of the page.
  "helpURL": "", // Provide the URL of the help page(instructions for using the index). Leave this empty if you want to hide the help icon. Providing a URL will open the help page in a new tab. (You can use telegra.ph to write instructions)
  .......
};
```
##  Credits
 - [yanzai](https://github.com/yanzai/goindex)
 - [sawankumar](https://github.com/sawankumar)
 - [5MayRain](https://github.com/5MayRain)
