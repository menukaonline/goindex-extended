![Preview](https://raw.githubusercontent.com/cheems/goindex-extended/master/images/preview.png)
# GoIndex Extended - Google Drive Index

[![Author: Cheems](https://img.shields.io/badge/Author-cheems-blue.svg)](https://github.com/cheems)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Repo Size](https://img.shields.io/github/repo-size/cheems/goindex-extended?color=2fc29d&label=Repo%20Size)]()
[![Last Commit](https://img.shields.io/github/last-commit/cheems/goindex-extended?label=Last%20Commit)]()
[![Built with Cloudflare Workers](https://img.shields.io/badge/Built_with-Cloudflare%20Workers-1f425f?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAABmJLR0QA/wD/AP+gvaeTAAADOUlEQVQ4jXVUz2scVRz/vNnN7qY16TY1LmJbYTHGUEIMafGgpTnoQUV7sfoHSGvv/qjSy2KhNIV4EBFjqYIo6sGIePJiEUGw2hpLU0xLYhOsoY0l1U12Z74/e5jsZCPtwDvMm/c+8/n1XsD/nvonw4fveWbiJbjtbM15vHKNfju2I+rI29rUTTcbKz575qv2vVH7S/zR8JOB5D2/fnELEKoAqjCtho7OvdgyyHBU4V6F2h6ofUFfPzFyVzCUNx3Nb+3ONadO98P9JoQAIYCbKDz4XDBid1G4CFwkb6bjdwRLJvfuh/moiyA4bZL5ny5DOAVTQnB5KHQNXVwDAkThrPviz3c/vwHMz4zmTeVEulABE9D0Z0NwWYC22MUobN9X9kSlxQ4iMJKTPjHSkYElS8lhsDzi3JKgcE6+hNrxjJ0kgMQ7ctv2TDkznAXOCoj2N6L4EAAE/+bxruZKcgVqFVeFqwGqcQ6hv3TowF+Y2TUFSQZhApgCiG40z7/bBZdONwPSsZRE3Bc16vFbLlLJJIrA2N7vfGV6IYSagVHLpAoBtHpfrvex341Tmalk7S3EOBJB5KCzprTTjxpMTrRMDYMHJmH2awamhMK2voedVVs/dxE4y8t5ZwXW5LkqoIZQCmFDZSQJUEplmgKONE1oKlMdboYILKfWu6NQohz/E7+dtf+XD14AxyMZMyHEf09dhkpurR5psiynw9JYf1exyFdcrWLEMFYIsbjZcOWpyT9QmroAagysswqLK+c+7nFIEZoG4GZLWpC+qPfITN1Jj2lM0EQgRDCWvLG+g83TB5GsDqz7JWgu/LzoSkVwZj7AUut5c/nfCAC6G/MTmsisJgQlgZHAFKNIVo6C40yeC8/TtfNDGUhqzUz39eVTWWlDDWLCNWWBsUDFUH706TnE9QegaYIwxersjw2o5rIERWAsr4cPwRvOZuX48qeudsHEgI4Sbd6+q9LOyphmafHSQFu34KI/9IzVv73jraER3nBzu3f3/qto3ipnXrnj1qXvS1BLK5GeSwlKr971Cto5vvpdCNFrnVvvX4TEcxCag9CcNP47m9z4s8gki8pyFaJnofpieZzPte+/DbyhqHE2i7F2AAAAAElFTkSuQmCC)](https://workers.cloudflare.com/)
[![Written in JavaScript](https://img.shields.io/badge/Written_in-JavaScript-000?logo=javascript&logoColor=000&labelColor=F7DF1E)](https://www.javascript.com/)


Combining the power of [Cloudflare Workers](https://workers.cloudflare.com/) and [Google Drive](https://www.google.com/drive/) will allow you to index your files on the browser on Cloudflare Workers.

## 🙈 Demo

- **🖤 Dark Theme**: _https://dark-demo.dudoo.workers.dev_
- **🤍 Light Theme**: _https://light-demo.dudoo.workers.dev_

<h2><details>
<summary>📸 Screenshots</summary>

![Screenshot-1](https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-1.png)
![Screenshot-2](https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-2.png)
![Screenshot-3](https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-3.png)
![Screenshot-4](https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-4.png)
![Screenshot-5](https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-5.png)
![Screenshot-6](https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-6.png)

</details></h2>

## ✨ Unique Features

- 🔎 Search function also works for folder root type (A bug found: Working on it)
- 🗂️ Support for duplicated file and folder names
   - 🔤 Files and folders with the same name
   - 🔠 Files and folders with the same name but different cases
- ⌛ Ability to force index to load (can be disabled)
- 🚀 Quick actions tab (can be disabled):
   - 📥 Direct Download
   - ↗️ Open link in a new tab
   - 📋 Copy link to the clipboard
- 🔢 File size in 1024 bytes system
- 🔐 Support for multiple (unlimited) username/password pairs
- 📚 Ability to download files of Google Workspace apps in all available formats:
   - 📘 Google Documents - ( docx | odt | rtf | pdf | plain text | html | html/zipped | epub )
   - 📊 Google Spreadsheets - ( xlsx | ods | csv | pdf | html/zipped )
   - 👨‍🏫 Google Presentations - ( pptx | odp | pdf | plain text )
   - 🖌 Google Drawings - ( pdf | jpg | png | svg )
   - ✍ Google Jamboards - ( pdf )
   - 📜 Google Apps Scripts - ( json )
   - 📃Google Forms - ( html/zipped )
- 🗃️ Ability to change the order which files are listed in
- 📂 Ability to access/download shortcuts of files and folders
- 🦠 Ability to download files which Google has flagged as a virus (can be disabled)
- 🗑️ Ability to download trashed files (can be disabled)
- 🔡 Support for all characters including slashes('/', '\\') and emojies in file/folder names
- 📅 Shows modified date & time in your local time
- 🕒 Modified time displaying issue on Safari browser and browsers on iOS has been fixed

## ⚡ Features

- 🖥 Video Player - ( mp4 | webm | avi | mpg | mpeg | mkv | rm | rmvb | mov | wmv | asf | ts | flv )
- 🎧 Music Player - ( mp3 | flac | wav | ogg | m4a )
- 📚 Document Viewer - ( html | php | css | go | java | js | json | txt | sh | md | pdf )
- 🖼️ Image Viewer - ( bmp | jpg | jpeg | png | gif )
- 🔎 Multi-level Search
- 🔐 Multi drive encryption
- 📱 Mobile Friendly
- 💾 Page-level caching, browser forward and backward without reloading
- 🧥 Dark Theme
- 🎨 Main Color:
   - red | pink | purple | deep-purple | indigo | blue | light-blue |
     cyan | teal | green | light-green | lime | yellow | amber | orange |
     deep-orange | brown | greyblue-grey
- 🖌 Accent Color:
   - red | pink | purple | deep-purple | indigo | blue | light-blue | cyan | teal | green | light-green | lime | yellow | amber | orange | deep-orange

## 📖 Wiki
**_Note: The Wiki will be added soon. Until then, you can check this out: [https://dudoo.me/wikis](https://dudoo.me/wikis).  
If you are comfortable reading comments in the code, here you go: [goindex-extended/index.js](https://github.com/cheems/goindex-extended/blob/master/index.js). (Note: Don't edit the code after the [line:112](https://github.com/cheems/goindex-extended/blob/master/index.js#L112) unless you need to develop.)_**

## 🚀 Quick Deployment
**_Note: If you need the latest version, use index.js, which is in the root of the repo: [goindex-extended/index.js](https://github.com/cheems/goindex-extended/blob/master/index.js)._**
- **_The Latest version of index.js will be added to the generator soon. Until then, you can use the generator for creating auth credetials, and then you can add them manually to the latest code which you can get from the file mentioned above._**
1. Open the below Colab notebook in a new tab  
   [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/cheems/goindex-extended/blob/master/template/GoIndex_Extended_Code_Generator_with_rclone_credentials.ipynb)
2. Fill the fields in it on your choice and run the cell
3. Download the txt file with the code generated by the notebook
4. Deploy the code to [Cloudflare Workers](https://www.cloudflare.com/)

## 🕹 Deployment

1. Go enable [Google Drive API](https://console.cloud.google.com/marketplace/product/google/drive.googleapis.com)
2. Create a new project or use one of the existing projects if you already have created. (If you are using Google Cloud Platform for the 1st time: do this only if you want to give your project a custom name. otherwise, your project will be automatically created after the next step with the name "My First Project". If you don't care about the name of the project like me then just skip this step)
3. Click Enable button to enable Google Drive API
4. Click Create Credentials
5. Select "Google Drive API" from the 1st dropdown and select "Other UI" from the 2nd dropdown
6. Select "User data" from radio buttons
7. Click "What credentials do I need" then, a pop-up will appear saying that you need to set up the Consent Screen.
8. click "set up consent screen". it will take you to a new tab
9. Select "External" as the user type and click create
10. Provide app name, User support email, and developer contact information which are required for the consent screen. then finish creating the consent screen.
11. After creating the consent screen, click publish app. (This option can be found under Publishing status)
12. Head back to the previous tab to continue creating credentials
13. Click on refresh and create OAuth client ID then click Done
14. Click on newly created OAuth Client ID to see client id and secret
15. Open the below Colab notebook(which is made for the ones who wish to use their own credentials) in a new tab  
    [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/cheems/goindex-extended/blob/master/template/GoIndex_Extended_Code_Generator_with_custom_credentials.ipynb)
16. Copy your client id and client secret into the Colab notebook and fill the fields in it on your choice and run the cell
17. Download the txt file with the code generated by the notebook
18. Deploy the code to [Cloudflare Workers](https://workers.cloudflare.com/)

## 🤝 Special Thanks & Credits

### Source:
- **[donwa](https://github.com/donwa)** : for writing such a great script
- **[yanzai](https://github.com/yanzai) & all initial contributors** : for contributing to the project
- **[5MayRain](https://github.com/5MayRain)** : for implementing Nexmoe theme

### Wiki & Readme:
- **[LeeluPradhan](https://github.com/LeeluPradhan)**
- **[tks18](https://github.com/tks18)**

&nbsp;&nbsp;&nbsp;&nbsp;Took some stuff from their repos for setting up the README.md file and the Wiki. So thanks! 😁



## ⚖ LICENSE

**_[GoIndex - Extended](https://github.com/cheems/goindex-extended) by [Cheems(AKA Dudu)](https://github.com/cheems/) is licensed under the [MIT License](https://opensource.org/licenses/MIT), which you can find in the [goindex-extended/LICENSE](https://github.com/cheems/goindex-extended/blob/master/LICENSE) file._**