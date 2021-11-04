const authConfig = {
  "siteName": "GoIndex Extended", // WebSite Name
  "siteIcon": "https://raw.githubusercontent.com/cheems/goindex-extended/master/images/favicon-x.png", //or fevicon-x-light.png
  "version": "1.4.1", // VersionControl, do not modify manually
  // client_id & client_secret - PLEASE USE YOUR OWN!
  "client_id": "", // Client ID
  "client_secret": "", // Client Secret
  "refresh_token": "", // Refresh Token
  "folder_list_url": "", // Folder Id List(Only if you have any folders in roots) - Sample: https://cdn.jsdelivr.net/gh/cheems/goindex-extended@master/sample-files/sample-folder-id-list.txt
  // Crypt Secret must be 32 characters long - Sample: "1234567890123456abcdefghIJKLMN!*" | don't use these characters (\,/,",') 
  "crypt_secret": "", // Crypt Secret (Required)* This is used to encrypt file ids
  /**
    * Set up multiple Drives to be displayed; add multiples by format
    * [id]: It can be team folder id, subfolder id, or "root" (representing the root directory of personal disk);
    * [name]: the displayed name
    * [auth]: {'username_1' : 'password_1', 'username_2' : 'password_2'} 
    * [protect_file_link]: Whether Basic Auth is used to protect the file link, the default value (when not set) is false, that is, the file link is not protected (convenient for straight chain download / external playback, etc.)
    * Basic Auth of each folder can be set separately. Basic Auth protects all folders / subfolders in the disk by default
    * [Note] By default, the file link is not protected, which can facilitate straight-chain download / external playback;
    * If you want to protect the file link, you need to set protect_file_link to true. At this time, if you want to perform external playback and other operations, you need to replace host with user: pass @ host
    * No need for Basic Auth folder, just keep user and pass empty at the same time. (No need to set it directly)
    * [Note] For the folder whose id is set to the subfolder id, the search function will not be supported (it does not affect other disks).
    */
  // =================== ROOTS ===================
  "roots": [
    {
      id: "root", //you can use folderid other than root but then search wont work
      name: "Personal Drive",

      /* provide 'username':'password' combinations seperated by commas. 
       * If you add empty values like this => auth":{"":""} then the site will still ask for authentication but user can enter without entering any data by clicking submit
       */

      // To enable password protection, uncomment the below code line(remove "//" in the front of the below code line)
      // auth: {'username_1' : 'password_1', 'username_2' : 'password_2'},
      protect_file_link: false //true or false
    },
    {
      id: "drive_id",
      name: "Personal Drive II",
      // To enable password protection, uncomment the below line
      // auth: {'username_1' : 'password_1', 'username_2' : 'password_2'},
      protect_file_link: false
    },
    // You can add more drives like above
    /*{
        id: "drive_id",
        name: "Personal Drive II",
        // To enable password protection, uncomment the below line
        // auth: {'username_1' : 'password_1', 'username_2' : 'password_2'},
        protect_file_link: false
      }, */
  ],
  // =================== END OF ROOTS ===================  <-- DON'T REMOVE THIS LINE
  //Set this to true if you need to let users download files which Google Drive has flagged as a virus
  "enable_virus_infected_file_down": false,
  //Set this to true if you want to sort the list by modified time
  "sort_by_modified_time": false,
  //Set this to true if you need to let users download deleted files from the current drive
  "include_trashed_files": false, // Then files will be visible at where they were before moving to the trash bin
  //Set this to true if you want to force directories to load. This may cause you to exceed API rate limits
  "force_list_to_load": true,
  /**
    * The number displayed on each page of the file list page. [Recommended setting value is between 100 and 1000];
    * If the setting is greater than 1000, it will cause an error when requesting drive api;
    * If the set value is too small, the incremental loading (page loading) of the scroll bar of the file list page will be invalid
    * Another effect of this value is that if the number of files in the directory is greater than this setting (that is, multiple pages need to be displayed), the results of the first listing directory will be cached.
    */
  "files_list_page_size": 500,
  /**
    * The number displayed on each page of the search results page. [Recommended setting value is between 50 and 1000];
    * If the setting is greater than 1000, it will cause an error when requesting drive api;
    * If the set value is too small, it will cause the incremental loading (page loading) of the scroll bar of the search results page to fail;
    * The size of this value affects the response speed of the search operation
    */
  "search_result_list_page_size": 50,
  // Confirm that cors can be opened
  "enable_cors_file_down": false,
  /**
    * The above basic auth already contains the function of global protection in the disk. So by default, the password in the .password file is no longer authenticated;
    * If you still need to verify the password in the .password file for certain directories based on global authentication, set this option to true;
    * [Note] If the password verification of the .password file is enabled, the overhead of querying whether the .password file in the directory will be added each time the directory is listed.
    */
  "enable_password_file_verify": false
};

/**
 * web ui 
 */
const uiConfig = {
  "theme": "material", // DO NOT set it to classic
  "dark_mode": true, // true or false
  "title_include_drive_name": false, // Set this to true if you need to add drive name to the page title which will be displayed in browser tab name area (ex: Goindex Extented - Disk 01)
  "title_include_path": "", // full-path | current-directory | or leave it empty
  // set title_include_path to "full-path" if you want to add full path of the current directory to title (ex: Goindex Extented - /Multimedia/images/) or (ex: Goindex Extented - Disk 01 - /Multimedia/images)
  // set title_include_path to "current-directory" to add current directory to title (ex: Goindex Extented - /images/)
  // If you need to remove path from page title, leave it empty as it is
  "hide_actions_tab": false, // Set this to true if you want to hide the actions tab which contains direct dowload, copy link, open in a new tab button
  "hide_head_md": false, // Set this to true if you need to disable rendering HEAD.md
  "hide_readme_md": false, // Set this to true if you need to disable rendering README.md
  "helpURL": "", // Provide the URL of the help page(instructions for using the index). Leave this empty if you want to hide the help icon. Providing a URL will open the help page in a new tab. (You can use telegra.ph to write instructions)
  "footer_text": "Made with <3", // Provide the footer text. Leave this empty if you want to hide it.
  "credits": true, // Set this to true if you like to give credits. Otherwise you can set it to false. (NO BIG DEAL:3)
  "main_color": "blue-grey", // blue-grey | red | pink | purple | deep-purple | indigo | blue | light-blue | cyan | teal | green | light-green | lime | yellow | amber | orange | deep-orange | brown | grey
  "accent_color": "blue" // red | pink | purple | deep-purple | indigo | blue | light-blue | cyan | teal | green | light-green | lime | yellow | amber | orange | deep-orange
  // blue-grey and blue suit with both light and dark themes
};

/**
 * Google Workspace Apps Export config
 *
 * Set preferred extensions that workspace files need to be downloaded.
 * Use one of available extensions mentioned next to each value.
 * Don't change the current values if you need to use the default extensions which Google drive uses.
 */
const exportConfig = {
  "documents": "docx", // docx | odt | rtf | pdf | txt | html | html/zipped | epub
  "spreadsheets": "xlsx", // xlsx | ods | csv | pdf | html/zipped
  "slides": "pptx", // pptx | odp | pdf | txt
  "drawings": "jpg", // pdf | jpg | png | svg
  "jamboard": "pdf", // pdf
  "forms": "html/zipped" // html/zipped
};

const exportExtensions = {
  "application/vnd.google-apps.document": exportConfig.documents,
  "application/vnd.google-apps.spreadsheet": exportConfig.spreadsheets,
  "application/vnd.google-apps.presentation": exportConfig.slides,
  "application/vnd.google-apps.drawing": exportConfig.drawings,
  "application/vnd.google-apps.jam": exportConfig.jamboard,
  "application/vnd.google-apps.form": exportConfig.forms
};

const workspaceExportMimeTypes = {
  "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "odt": "application/vnd.oasis.opendocument.text",
  "rtf": "application/rtf",
  "pdf": "application/pdf",
  "txt": "text/plain",
  "html": "text/html",
  "html/zipped": "application/zip",
  "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "ods": "application/x-vnd.oasis.opendocument.spreadsheet",
  "csv": "text/csv",
  "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "odp": "application/vnd.oasis.opendocument.presentation",
  "jpg": "image/jpeg",
  "png": "image/png",
  "svg": "image/svg+xml"
};

/**
 * global functions
 */
const FUNCS = {
  formatSearchKeyword: function (keyword) {
    let nothing = "";
    let space = " ";
    if (!keyword) return nothing;
    return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
      .replace(/[,，|(){}]/g, space)
      .trim()
  }

};

/**
 * global consts
 * @type {{folder_mime_type: string, default_file_fields: string, gd_root_type: {share_drive: number, user_drive: number, sub_folder: number}}}
 */
const CONSTS = new (class {
  default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
  gd_root_type = {
    user_drive: 0,
    share_drive: 1,
    sub_folder: 2
  };
  folder_mime_type = 'application/vnd.google-apps.folder';
})();


// gd instances
var gds = [];

function html(current_drive_order = 0, model = {}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <link rel="shortcut icon" href="${authConfig.siteIcon}" type="image/x-icon" />
  <script>
    window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
    window.MODEL = JSON.parse('${JSON.stringify(model)}');
    window.current_drive_order = ${current_drive_order};
    window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  </script>
  <script src="//cdn.jsdelivr.net/gh/cheems/goindex-extended@4d1427558a21603e7c7e7dc986a154a9560f4835/app.js"></script>
</head>
<body>
</body>
</html>
`;
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

function id2crc32(r) {
  for (var a, o = [], c = 0; c < 256; c++) {
    a = c;
    for (var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
    o[c] = a
  }
  for (var n = -1, t = 0; t < r.length; t++) n = n >>> 8 ^ o[255 & (n ^ r.charCodeAt(t))]
    ;
  return (-1 ^ n) >>> 0
};

function getIV(ParsedString) {
  let iv = ParsedString.clone();
  iv.sigBytes = 16;
  iv.clamp();
  return iv
}

function encryptAES(RawText, Key) {
  let plainText = RawText;
  let key = CryptoJS.enc.Utf8.parse(Key);
  let iv = getIV(CryptoJS.enc.Utf8.parse(plainText));
  let failSafe = "a a a a a a a a ";
  let encrypted = CryptoJS.AES.encrypt(failSafe + plainText, key, {
    iv: iv,
    mode: CryptoJS.mode.CFB
  });
  return encrypted.toString()
}

function decryptAES(EncryptedString, Key) {
  if (Key.length < 32 || !Key) {
    Key = authConfig.refresh_token.substring(3, 35)
  } else if (Key.length > 32) {
    Key = Key.substring(0, 32)
  }
  let cipherText = CryptoJS.enc.Base64.parse(EncryptedString);
  let key = CryptoJS.enc.Utf8.parse(Key);
  let iv = getIV(cipherText);
  cipherText.words.splice(0, 4);
  cipherText.sigBytes -= 16;
  decrypted = CryptoJS.AES.decrypt({ ciphertext: cipherText }, key, {
    iv: iv,
    mode: CryptoJS.mode.CFB
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

async function getFolderIdList() {
  var encryptedIdList = await fetch(authConfig.folder_list_url);
  var encryptedIdList = await encryptedIdList.text();
  var idListString = decryptAES(encryptedIdList, authConfig.crypt_secret)
  var idList = JSON.parse(idListString);
  return idList
}

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  if (gds.length === 0) {
    for (let i = 0; i < authConfig.roots.length; i++) {
      const gd = new googleDrive(authConfig, i);
      await gd.init();
      gds.push(gd)
    }
    // This operation is parallel to improve efficiency
    let tasks = [];
    gds.forEach(gd => {
      tasks.push(gd.initRootType());
    });
    for (let task of tasks) {
      await task;
    }
  }

  // Extract drive order from path
  // And get the corresponding gd instance according to drive order
  let gd;
  let url = new URL(request.url);
  let path = url.pathname;

  /**
   * Redirect to start page
   * @returns {Response}
   */
  function redirectToIndexPage() {
    return new Response('', { status: 301, headers: { 'Location': `${url.origin}/0:/` } });
  }

  if (path == '/') return redirectToIndexPage();
  if (path.toLowerCase() == '/favicon.ico') {
    // You can find a favicon later
    return new Response('', { status: 404 })
  }

  // Special command format
  const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)$/g;
  const match = command_reg.exec(path);
  if (match) {
    const num = match.groups.num;
    const order = Number(num);
    if (order >= 0 && order < gds.length) {
      gd = gds[order];
    } else {
      return redirectToIndexPage()
    }
    // basic auth
    for (const r = gd.basicAuthResponse(request); r;) return r;
    const command = match.groups.command;
    // search for
    if (command === 'search') {
      if (request.method === 'POST') {
        // search results
        return handleSearch(request, gd);
      } else {
        const params = url.searchParams;
        // Search page
        return new Response(html(gd.order, {
          q: params.get("q") || '',
          is_search_page: true,
          root_type: gd.root_type
        }),
          {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
      }
    } else if (command === 'id2path' && request.method === 'POST') {
      return handleId2Path(request, gd)
    }
  }

  // Expected path format
  const common_reg = /^\/\d+:\/.*$/g;
  try {
    if (!path.match(common_reg)) {
      return redirectToIndexPage();
    }
    let split = path.split("/");
    let order = Number(split[1].slice(0, -1));
    if (order >= 0 && order < gds.length) {
      gd = gds[order];
    } else {
      return redirectToIndexPage()
    }
  } catch (e) {
    return redirectToIndexPage()
  }

  // basic auth
  // for (const r = gd.basicAuthResponse(request); r;) return r;
  const basic_auth_res = gd.basicAuthResponse(request);

  path = path.replace(gd.url_path_prefix, '') || '/';
  if (request.method == 'POST') {
    return basic_auth_res || apiRequest(request, gd);
  }

  let action = url.searchParams.get('a');

  if (path.substr(-1) == '/' || action != null) {
    return basic_auth_res || new Response(html(gd.order, { root_type: gd.root_type }), {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  } else {
    if (path.split('/').pop().toLowerCase() == ".password") {
      return basic_auth_res || new Response("", { status: 404 });
    }
    let file = await gd.file(path);
    let range = request.headers.get('Range');
    const inline_down = 'true' === url.searchParams.get('inline');
    if (gd.root.protect_file_link && basic_auth_res) return basic_auth_res;
    return gd.down(file.id, file.mimeType, range, inline_down);
  }
}


async function apiRequest(request, gd) {
  let url = new URL(request.url);
  let path = url.pathname;
  path = path.replace(gd.url_path_prefix, '') || '/';

  let option = { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } }

  if (path.substr(-1) == '/') {
    let form = await request.formData();
    // This can increase the speed when listing the directory for the first time. The disadvantage is that if password verification fails, the overhead of listing directories will still be incurred
    let deferred_list_result = gd.list(path, form.get('page_token'), Number(form.get('page_index')));

    // check .password file, if `enable_password_file_verify` is true
    if (authConfig['enable_password_file_verify']) {
      let password = await gd.password(path);
      // console.log("dir password", password);
      if (password && password.replace("\n", "") !== form.get('password')) {
        let html = `{"error": {"code": 401,"message": "password error."}}`;
        return new Response(html, option);
      }
    }

    let list_result = await deferred_list_result;
    return new Response(JSON.stringify(list_result), option);
  } else {
    let file = await gd.file(path);
    let range = request.headers.get('Range');
    return new Response(JSON.stringify(file));
  }
}

// Processing search
async function handleSearch(request, gd) {
  const option = { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } };
  let form = await request.formData();
  let search_result = await
    gd.search(form.get('q') || '', form.get('page_token'), Number(form.get('page_index')));
  return new Response(JSON.stringify(search_result), option);
}

/**
 * Handle id2path
 * @param request 需要 id 参数
 * @param gd
 * @returns {Promise<Response>} [Note] If the item represented by the id received from the front desk is not under the target gd disk, the response will return an empty string to the front desk""
 */
async function handleId2Path(request, gd) {
  const option = { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } };
  let form = await request.formData();
  let path = await gd.findPathById(decryptAES(form.get('id'), authConfig.crypt_secret));
  return new Response(path || '', option);
}

class googleDrive {
  constructor(authConfig, order) {
    // Each disk corresponds to an order, corresponding to a gd instance
    this.order = order;
    this.root = authConfig.roots[order];
    this.root.protect_file_link = this.root.protect_file_link || false;
    this.url_path_prefix = `/${order}:`;
    this.authConfig = authConfig;
    // TODO: These cache invalidation refresh strategies can be formulated later
    // path id
    this.paths = [];
    // path file
    this.files = [];
    // path pass
    this.passwords = [];
    // id <-> path
    this.id_path_cache = {};
    this.id_path_cache[this.root['id']] = '/';
    this.paths["/"] = this.root['id'];
    /*if (this.root['pass'] != "") {
      this.passwords['/'] = this.root['pass'];
    }*/
    // this.init();
  }

  /**
   * Initial authorization; then obtain user_drive_real_root_id
   * @returns {Promise<void>}
   */
  async init() {
    await this.accessToken();
    /*await (async () => {
        // Only get 1 time
        if (authConfig.user_drive_real_root_id) return;
        const root_obj = await (gds[0] || this).findItemById('root');
        if (root_obj && root_obj.id) {
            authConfig.user_drive_real_root_id = root_obj.id
        }
    })();*/
    // Wait for user_drive_real_root_id, only get 1 time
    if (authConfig.user_drive_real_root_id) return;
    const root_obj = await (gds[0] || this).findItemById('root');
    if (root_obj && root_obj.id) {
      authConfig.user_drive_real_root_id = root_obj.id
    }
  }

  /**
   * Get the root directory type, set to root_type
   * @returns {Promise<void>}
   */
  async initRootType() {
    const root_id = this.root['id'];
    const types = CONSTS.gd_root_type;
    if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
      this.root_type = types.user_drive;
    } else {
      const obj = await this.getShareDriveObjById(root_id);
      this.root_type = obj ? types.share_drive : types.sub_folder;
    }
  }

  /**
   * Returns a response that requires authorization, or null
   * @param request
   * @returns {Response|null}
   */
  basicAuthResponse(request) {
    const auth = this.root.auth || '',
      _401 = new Response('unauthorized', {
        headers: {
          'WWW-Authenticate': `Basic realm="goindex:drive:${this.order}"`,
          'content-type': 'text/html;charset=UTF-8'
        },
        status: 401
      });
    if (auth) {
      const _auth = request.headers.get('Authorization')
      if (_auth) {
        try {
          const [received_user, received_pass] = atob(_auth.split(' ').pop()).split(':');
          if (auth.hasOwnProperty(received_user)) {
            if (auth[received_user] == received_pass) {
              return null;
            } else return _401;
          } else return _401;
        } catch (e) { }
      }
    } else return null;
    return _401;
  }

  async down(id, mimeType, range = '', inline = false) {
    let exportExtension = exportExtensions[mimeType];
    let exportMimeType = workspaceExportMimeTypes[exportExtension];
    let url;
    if (exportExtensions.hasOwnProperty(mimeType)) {
      url = `https://www.googleapis.com/drive/v3/files/${id}/export?alt=media&mimeType=${exportMimeType}`;
    } else if (mimeType === "application/vnd.google-apps.script") {
      url = `https://script.google.com/feeds/download/export?id=${id}&format=json`;
    } else {
      url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
    }
    let requestOption = await this.requestOption();
    requestOption.headers['Range'] = range;
    let res = await fetch(url, requestOption);
    if (this.authConfig.enable_virus_infected_file_down) {
      if (res.status === 403) {
        url += '&acknowledgeAbuse=true';
        res = await this.fetch200(url, requestOption);
      }
    }
    const { headers } = res = new Response(res.body, res)
    this.authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
    inline === true && headers.set('Content-Disposition', 'inline');
    return res;
  }

  async file(path) {
    if (typeof this.files[path] == 'undefined') {
      this.files[path] = await this._file(path);
    }
    return this.files[path];
  }

  async _file(path) {
    let arr = path.split('/');
    let name = arr.pop();
    let _temp_name = name;
    name = decodeURIComponent(name).replace(/\'/g, "\\'");
    let dupID;
    if (/\(dupID: \d+\)/.test(name.substring(name.search(/\(dupID: \d+\)/)))) {
      dupID = name.substring(0, name.length - 1).substring(name.search(/\(dupID: \d+/) + 8);
      name = name.substring(0, name.search(/\(dupID: \d+\)/) - 1);
    }
    let dir = arr.join('/') + '/';
    // console.log(name, dir);
    let parent = await this.findPathId(dir);
    // console.log(parent);
    let url = 'https://www.googleapis.com/drive/v3/files';
    let params = { 'includeItemsFromAllDrives': true, 'supportsAllDrives': true };
    params.q = `'${parent}' in parents and name = '${name}'`;
    if (!this.authConfig.include_trashed_files) {
      params.q += ' and trashed = false';
    }
    params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink, shortcutDetails)";
    url += '?' + this.enQuery(params);
    let requestOption = await this.requestOption();
    let response = await fetch(url, requestOption);
    if (this.authConfig.force_list_to_load) {
      if (response.status !== 200) {
        response = await this.fetch200(url, requestOption);
      }
    }
    let obj = await response.json();
    if (!obj.files[0]) {
      return null
    } else if (obj.files.length > 1) {
      if (dupID) {
        let correct_file_item;
        obj.files.map(function (item) {
          if (id2crc32(item.id).toString() === dupID) {
            correct_file_item = item;
          }
        })
        obj.files = [];
        obj.files.push(correct_file_item);
      }
    }
    if (obj.files && obj.files[0] && obj.files[0].mimeType == 'application/vnd.google-apps.shortcut') {
      obj.files[0].id = obj.files[0].shortcutDetails.targetId;
      obj.files[0].mimeType = obj.files[0].shortcutDetails.targetMimeType;
    }
    // console.log(obj);
    if (_temp_name.includes("%5C%5C")) {
      name = _temp_name.replaceAll("%5C%5C", "%5C");
      name = decodeURIComponent(name);
    }
    const same_name = obj.files.find(v => v.name === name)
    if (!same_name) {
      return obj.files[0];
    }
    return same_name;
    // return obj.files[0];
  }

  // Cache through reqeust cache
  async list(path, page_token = null, page_index = 0) {
    if (this.path_children_cache == undefined) {
      // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
      this.path_children_cache = {};
    }

    if (this.path_children_cache[path]
      && this.path_children_cache[path][page_index]
      && this.path_children_cache[path][page_index].data
    ) {
      let child_obj = this.path_children_cache[path][page_index];
      return {
        nextPageToken: child_obj.nextPageToken || null,
        curPageIndex: page_index,
        data: child_obj.data
      };
    }

    let id = await this.findPathId(path);
    let result = await this._ls(id, page_token, page_index);
    let data = result.data;
    // Cache for multiple pages
    if (result.nextPageToken && data.files) {
      if (!Array.isArray(this.path_children_cache[path])) {
        this.path_children_cache[path] = []
      }
      this.path_children_cache[path][Number(result.curPageIndex)] = {
        nextPageToken: result.nextPageToken,
        data: data
      };
    }

    return result
  }


  async _ls(parent, page_token = null, page_index = 0) {
    // console.log("_ls", parent);

    if (parent == undefined) {
      return null;
    }
    let obj;
    let params = { 'includeItemsFromAllDrives': true, 'supportsAllDrives': true };
    params.q = `'${parent}' in parents AND name !='.password'`;
    if (!this.authConfig.include_trashed_files) {
      params.q += ' and trashed = false';
    }
    if (this.authConfig.sort_by_modified_time) {
      params.orderBy = 'folder,modifiedTime desc,name';
    } else {
      params.orderBy = 'folder,name,modifiedTime desc';
    }
    params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime, shortcutDetails)";
    params.pageSize = this.authConfig.files_list_page_size;

    if (page_token) {
      params.pageToken = page_token;
    }
    let url = 'https://www.googleapis.com/drive/v3/files';
    url += '?' + this.enQuery(params);
    let requestOption = await this.requestOption();
    let response = await fetch(url, requestOption);
    if (this.authConfig.force_list_to_load) {
      if (response.status !== 200) {
        response = await this.fetch200(url, requestOption);
      }
    }
    obj = await response.json();
    let temp_names = [];
    let duplicate_names = [];
    obj.files.map(function (item) {
      if (!temp_names.includes(item.name)) {
        temp_names.push(item.name)
      } else {
        if (!duplicate_names.includes(item.name)) {
          duplicate_names.push(item.name)
        }
      }
    })
    obj.files.map(function (item) {
      if (duplicate_names.includes(item.name)) {
        item.name = item.name + " (dupID: " + id2crc32(item.id) + ")"
      }
    })
    obj.files.forEach(file => {
      if (file && file.mimeType == 'application/vnd.google-apps.shortcut') {
        file.id = file.shortcutDetails.targetId;
        file.mimeType = file.shortcutDetails.targetMimeType;
      }
    });

    if (obj.files.length != 0) {
      obj.files.map(function (item) {
        item.id = encryptAES(item.id, authConfig.crypt_secret)
      })
    }

    return {
      nextPageToken: obj.nextPageToken || null,
      curPageIndex: page_index,
      data: obj
    };

    /*do {
        if (pageToken) {
            params.pageToken = pageToken;
        }
        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        obj = await response.json();
        files.push(...obj.files);
        pageToken = obj.nextPageToken;
    } while (pageToken);*/

  }

  async password(path) {
    if (this.passwords[path] !== undefined) {
      return this.passwords[path];
    }

    // console.log("load", path, ".password", this.passwords[path]);

    let file = await this.file(path + '.password');
    if (file == undefined) {
      this.passwords[path] = null;
    } else {
      let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
      let requestOption = await this.requestOption();
      let response = await this.fetch200(url, requestOption);
      this.passwords[path] = await response.text();
    }

    return this.passwords[path];
  }


  /**
   * Get share drive information by id
   * @param any_id
   * @returns {Promise<null|{id}|any>} Any abnormal situation returns null
   */
  async getShareDriveObjById(any_id) {
    if (!any_id) return null;
    if ('string' !== typeof any_id) return null;

    let url = `https://www.googleapis.com/drive/v3/drives/${any_id}`;
    let requestOption = await this.requestOption();
    let res = await fetch(url, requestOption);
    if (res.status !== 200) {
      res = await this.fetch200(url, requestOption);
    }
    let obj = await res.json();
    if (obj && obj.id) return obj;

    return null
  }


  /**
   * search for
   * @returns {Promise<{data: null, nextPageToken: null, curPageIndex: number}>}
   */
  async search(origin_keyword, page_token = null, page_index = 0) {
    const types = CONSTS.gd_root_type;
    const is_user_drive = this.root_type === types.user_drive;
    const is_share_drive = this.root_type === types.share_drive;
    const is_sub_folder = this.root_type === types.sub_folder;


    const empty_result = {
      nextPageToken: null,
      curPageIndex: page_index,
      data: null
    };

    // if (!is_user_drive && !is_share_drive) {
    //   return empty_result;
    // }
    let keyword = FUNCS.formatSearchKeyword(origin_keyword);
    if (!keyword) {
      // Keyword is empty, return
      return empty_result;
    }
    let words = keyword.split(/\s+/);
    let name_search_str = `name contains '${words.join("' AND name contains '")}'`;

    // For corpora, user is a personal disk, and drive is a team disk. Match driveId
    let params = {};
    if (is_user_drive) {
      params.corpora = 'user'
    }
    if (is_share_drive) {
      params.corpora = 'drive';
      params.driveId = this.root.id;
      // This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
      params.includeItemsFromAllDrives = true;
      params.supportsAllDrives = true;
    }
    if (page_token) {
      params.pageToken = page_token;
    }
    params.q = `name !='.password' AND (${name_search_str})`;
    if (!this.authConfig.include_trashed_files) {
      params.q += ' and trashed = false';
    }
    params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
    params.pageSize = this.authConfig.search_result_list_page_size;
    // params.orderBy = 'folder,name,modifiedTime desc';
    let search_q_ids, huge_folder_list;
    if (is_sub_folder) {
      params.corpora = 'allDrives';
      params.supportsAllDrives = true;
      params.includeItemsFromAllDrives = true;
      if (authConfig.folder_list_url) {
        let folder_list = await getFolderIdList();
        let target_folder = folder_list[this.root.id];
        if (target_folder.length > 1) {
          console.log("hehe");
          var temp_id_list = [];
          target_folder.map(function (item) {
            Array.prototype.push.apply(temp_id_list, item);
          })
          search_q_ids = temp_id_list;
          huge_folder_list = true,
            params.pageSize = 200;
          params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime, parents)";
        } else {
          search_q_ids = "('" + target_folder[0].join("' in parents or '") + "' in parents)";
          params.q += `AND ${search_q_ids}`;
        }
      } else {
        params.q += `AND '${this.root.id}' in parents`;
      }
    }

    let url = 'https://www.googleapis.com/drive/v3/files';
    url += '?' + this.enQuery(params);
    // console.log(params)
    let requestOption = await this.requestOption();
    let response = await this.fetch200(url, requestOption);
    let res_obj = await response.json();

    while (response.status != 200 || (res_obj.nextPageToken && res_obj.files.length == 0)) {
      if (response.status != 200) {
        param.pageToken = null;
      } else {
        params.pageToken = res_obj.nextPageToken;
      }
      url = 'https://www.googleapis.com/drive/v3/files';
      url += '?' + this.enQuery(params);
      requestOption = await this.requestOption();
      response = await this.fetch200(url, requestOption);
      res_obj = await response.json();
    }

    let repeat_until_fetch_enough;
    if (!page_token) {
      repeat_until_fetch_enough = true;
    }
    if (huge_folder_list) {
      let temp_files = [];
      if (res_obj.files.length != 0) {
        res_obj.files.map(function (item) {
          if (item.parents) {
            if (search_q_ids.includes(item.parents[0])) {
              item.parents[0] = encryptAES(item.parents[0], authConfig.crypt_secret)
              temp_files.push(item)
            }
          }
        })
      }
      if (repeat_until_fetch_enough) {
        while (response.status != 200 || (res_obj.nextPageToken && temp_files.length < 10)) {
          if (response.status != 200) {
            param.pageToken = null;
          } else {
            params.pageToken = res_obj.nextPageToken;
          }
          url = 'https://www.googleapis.com/drive/v3/files';
          url += '?' + this.enQuery(params);
          requestOption = await this.requestOption();
          response = await this.fetch200(url, requestOption);
          res_obj = await response.json();
          if (res_obj.files.length !== undefined && res_obj.files.length != 0) {
            res_obj.files.map(function (item) {
              if (item.parents) {
                if (search_q_ids.includes(item.parents[0])) {
                  item.parents[0] = encryptAES(item.parents[0], authConfig.crypt_secret)
                  temp_files.push(item)
                }
              }
            })
          }
        }
      }
      res_obj.files = temp_files;
    }

    if (res_obj.files.length != 0) {
      res_obj.files.map(function (item) {
        item.id = encryptAES(item.id, authConfig.crypt_secret)
      })
    }

    return {
      nextPageToken: res_obj.nextPageToken || null,
      curPageIndex: page_index,
      data: res_obj
    };
  }


  /**
   * Get the file object of the parent folder of this file or folder one by one upwards. Note: it will be slow! ! !
   * Find up to the root directory of the current gd object (root id)
   * Only consider a single upward chain.
   * [Note] If the item represented by this id is not in the target gd disk, then this function will return null
   *
   * @param child_id
   * @param contain_myself
   * @returns {Promise<[]>}
   */
  async findParentFilesRecursion(child_id, contain_myself = true) {
    const gd = this;
    const gd_root_id = gd.root.id;
    const user_drive_real_root_id = authConfig.user_drive_real_root_id;
    const is_user_drive = gd.root_type === CONSTS.gd_root_type.user_drive;

    // End goal id for bottom-up query
    const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
    const fields = CONSTS.default_file_fields;

    // [{},{},...]
    const parent_files = [];
    let meet_top = false;

    async function addItsFirstParent(file_obj) {
      if (!file_obj) return;
      if (!file_obj.parents) return;
      if (file_obj.parents.length < 1) return;

      // ['','',...]
      let p_ids = file_obj.parents;
      if (p_ids && p_ids.length > 0) {
        // its first parent
        const first_p_id = p_ids[0];
        if (first_p_id === target_top_id) {
          meet_top = true;
          return;
        }
        const p_file_obj = await gd.findItemById(first_p_id);
        if (p_file_obj && p_file_obj.id) {
          parent_files.push(p_file_obj);
          await addItsFirstParent(p_file_obj);
        }
      }
    }

    const child_obj = await gd.findItemById(child_id);
    if (contain_myself) {
      parent_files.push(child_obj);
    }
    await addItsFirstParent(child_obj);

    return meet_top ? parent_files : null
  }

  /**
   * Get the path relative to the root directory of the disk
   * @param child_id
   * @returns {Promise<string>} [Note] If the item represented by this id is not under the target gd disk, then this method will return an empty string ""
   */
  async findPathById(child_id) {
    if (this.id_path_cache[child_id]) {
      return this.id_path_cache[child_id];
    }

    const p_files = await this.findParentFilesRecursion(child_id);
    if (!p_files || p_files.length < 1) return '';

    let cache = [];
    // Cache the path and id of each level found
    p_files.forEach((value, idx) => {
      const is_folder = idx === 0 ? (p_files[idx].mimeType === CONSTS.folder_mime_type) : true;
      let path = '/' + p_files.slice(idx).map(it => it.name).reverse().join('/');
      if (is_folder) path += '/';
      cache.push({ id: p_files[idx].id, path: path })
    });

    cache.forEach((obj) => {
      this.id_path_cache[obj.id] = obj.path;
      this.paths[obj.path] = obj.id
    });

    /*const is_folder = p_files[0].mimeType === CONSTS.folder_mime_type;
    let path = '/' + p_files.map(it => it.name).reverse().join('/');
    if (is_folder) path += '/';*/

    return cache[0].path;
  }


  // Get file item according to id
  async findItemById(id) {
    const is_user_drive = this.root_type === CONSTS.gd_root_type.user_drive;
    let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${CONSTS.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
    let requestOption = await this.requestOption();
    let res = await this.fetch200(url, requestOption);
    return await res.json()
  }

  async findPathId(path) {
    let c_path = '/';
    let c_id = this.paths[c_path];

    let arr = path.trim('/').split('/');
    for (let name of arr) {
      c_path += name + '/';
      let findDirId_again;
      if (typeof this.paths[c_path] == 'undefined') {
        let id = await this._findDirId(c_id, name);
        this.paths[c_path] = id;
        findDirId_again = false;
      }
      findDirId_again = true;
      if (name.includes('%5C%5C') && findDirId_again) {
        let id = await this._findDirId(c_id, name);
        console.log("id: " + id)
        this.paths[c_path] = id;
      }
      c_id = this.paths[c_path];
      if (c_id == undefined || c_id == null) {
        break;
      }
    }
    // console.log(this.paths);
    return this.paths[path];
  }

  async _findDirId(parent, name) {
    let _temp_name = name;
    name = decodeURIComponent(name).replace(/\'/g, "\\'");
    let dupID;
    if (/\(dupID: \d+\)/.test(name.substring(name.search(/\(dupID: \d+\)/)))) {
      dupID = name.substring(0, name.length - 1).substring(name.search(/\(dupID: \d+/) + 8);
      name = name.substring(0, name.search(/\(dupID: \d+\)/) - 1);
    }
    if (parent == undefined) {
      return null;
    }

    let url = 'https://www.googleapis.com/drive/v3/files';
    let params = { 'includeItemsFromAllDrives': true, 'supportsAllDrives': true };
    params.q = `'${parent}' in parents and (mimeType = 'application/vnd.google-apps.folder' or mimeType = 'application/vnd.google-apps.shortcut') and name = '${name}'`;
    if (!this.authConfig.include_trashed_files) {
      params.q += ' and trashed = false';
    }
    params.fields = "nextPageToken, files(id, name, mimeType, shortcutDetails)";
    url += '?' + this.enQuery(params);
    let requestOption = await this.requestOption();
    let response = await fetch(url, requestOption);
    if (this.authConfig.force_list_to_load) {
      if (response.status !== 200) {
        response = await this.fetch200(url, requestOption);
      }
    }
    let obj = await response.json();
    // stock
    // if (obj.files[0] == undefined) {
    //   return null;
    // }
    // return obj.files[0].id;

    // iwestlin PR
    // if (!obj.files) return null
    // const same_name = obj.files.find(v => v.name === name)
    // if (!same_name) return null
    // return same_name.id


    // Success attempt #1
    // if (!obj.files[0]) return null
    // if (obj.files.find(v => v.name === name)) {
    //     const same_name = obj.files.find(v => v.name === name)
    //     return same_name.id
    // } else {
    //     return obj.files[0].id;
    // }

    // Success attempt #2
    if (!obj.files[0]) {
      return null
    } else if (obj.files.length > 1) {
      obj.files = obj.files.reverse();
      if (dupID) {
        let correct_folder_item;
        obj.files.map(function (item) {
          if (id2crc32(item.id).toString() === dupID) {
            correct_folder_item = item;
          }
        })
        obj.files = [];
        obj.files.push(correct_folder_item);
      }
    }
    if (obj.files[0].mimeType == 'application/vnd.google-apps.shortcut' && obj.files[0].shortcutDetails.targetMimeType == 'application/vnd.google-apps.folder') {
      obj.files[0].id = obj.files[0].shortcutDetails.targetId;
    } else if (obj.files[0].mimeType == 'application/vnd.google-apps.shortcut' && obj.files[0].shortcutDetails.targetMimeType != 'application/vnd.google-apps.folder') {
      return null;
    }

    if (_temp_name.includes("%5C%5C")) {
      name = _temp_name.replaceAll("%5C%5C", "%5C");
      name = decodeURIComponent(name);
    }
    const same_name = obj.files.find(v => v.name === name)
    if (!same_name) {
      return obj.files[0].id;
    }
    return same_name.id
  }

  async accessToken() {
    console.log("accessToken");
    if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
      const obj = await this.fetchAccessToken();
      if (obj.access_token != undefined) {
        this.authConfig.accessToken = obj.access_token;
        this.authConfig.expires = Date.now() + 3500 * 1000;
      }
    }
    return this.authConfig.accessToken;
  }

  async fetchAccessToken() {
    console.log("fetchAccessToken");
    const url = "https://www.googleapis.com/oauth2/v4/token";
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const post_data = {
      'client_id': this.authConfig.client_id,
      'client_secret': this.authConfig.client_secret,
      'refresh_token': this.authConfig.refresh_token,
      'grant_type': 'refresh_token'
    }

    let requestOption = {
      'method': 'POST',
      'headers': headers,
      'body': this.enQuery(post_data)
    };

    const response = await fetch(url, requestOption);
    return await response.json();
  }

  async fetch200(url, requestOption, wait = false) {
    let response;
    if (wait) {
      await this.sleep(1100);
    }
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      console.log("Response status:", response.status);
      if (response.status != 403) {
        break;
      }
      await this.sleep(1000 * (i + 1));
    }
    return response;
  }

  async requestOption(headers = {}, method = 'GET') {
    const accessToken = await this.accessToken();
    headers['authorization'] = 'Bearer ' + accessToken;
    return { 'method': method, 'headers': headers };
  }

  enQuery(data) {
    const ret = [];
    for (let d in data) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
  }

  sleep(ms) {
    return new Promise(function (resolve, reject) {
      let i = 0;
      setTimeout(function () {
        console.log('sleep' + ms);
        i++;
        if (i >= 2) reject(new Error('i>=2'));
        else resolve(i);
      }, ms);
    })
  }
}

String.prototype.trim = function (char) {
  if (char) {
    return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
  }
  return this.replace(/^\s+|\s+$/g, '');
};


/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
License and disclaimer
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS =
  CryptoJS ||
  (function (u, p) {
    var d = {},
      l = (d.lib = {}),
      s = function () { },
      t = (l.Base = {
        extend: function (a) {
          s.prototype = this;
          var c = new s();
          a && c.mixIn(a);
          c.hasOwnProperty("init") ||
            (c.init = function () {
              c.$super.init.apply(this, arguments);
            });
          c.init.prototype = c;
          c.$super = this;
          return c;
        },
        create: function () {
          var a = this.extend();
          a.init.apply(a, arguments);
          return a;
        },
        init: function () { },
        mixIn: function (a) {
          for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
          a.hasOwnProperty("toString") && (this.toString = a.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        },
      }),
      r = (l.WordArray = t.extend({
        init: function (a, c) {
          a = this.words = a || [];
          this.sigBytes = c != p ? c : 4 * a.length;
        },
        toString: function (a) {
          return (a || v).stringify(this);
        },
        concat: function (a) {
          var c = this.words,
            e = a.words,
            j = this.sigBytes;
          a = a.sigBytes;
          this.clamp();
          if (j % 4) for (var k = 0; k < a; k++) c[(j + k) >>> 2] |= ((e[k >>> 2] >>> (24 - 8 * (k % 4))) & 255) << (24 - 8 * ((j + k) % 4));
          else if (65535 < e.length) for (k = 0; k < a; k += 4) c[(j + k) >>> 2] = e[k >>> 2];
          else c.push.apply(c, e);
          this.sigBytes += a;
          return this;
        },
        clamp: function () {
          var a = this.words,
            c = this.sigBytes;
          a[c >>> 2] &= 4294967295 << (32 - 8 * (c % 4));
          a.length = u.ceil(c / 4);
        },
        clone: function () {
          var a = t.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random: function (a) {
          for (var c = [], e = 0; e < a; e += 4) c.push((4294967296 * u.random()) | 0);
          return new r.init(c, a);
        },
      })),
      w = (d.enc = {}),
      v = (w.Hex = {
        stringify: function (a) {
          var c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++) {
            var k = (c[j >>> 2] >>> (24 - 8 * (j % 4))) & 255;
            e.push((k >>> 4).toString(16));
            e.push((k & 15).toString(16));
          }
          return e.join("");
        },
        parse: function (a) {
          for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << (24 - 4 * (j % 8));
          return new r.init(e, c / 2);
        },
      }),
      b = (w.Latin1 = {
        stringify: function (a) {
          var c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode((c[j >>> 2] >>> (24 - 8 * (j % 4))) & 255));
          return e.join("");
        },
        parse: function (a) {
          for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << (24 - 8 * (j % 4));
          return new r.init(e, c);
        },
      }),
      x = (w.Utf8 = {
        stringify: function (a) {
          try {
            return decodeURIComponent(escape(b.stringify(a)));
          } catch (c) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function (a) {
          return b.parse(unescape(encodeURIComponent(a)));
        },
      }),
      q = (l.BufferedBlockAlgorithm = t.extend({
        reset: function () {
          this._data = new r.init();
          this._nDataBytes = 0;
        },
        _append: function (a) {
          "string" == typeof a && (a = x.parse(a));
          this._data.concat(a);
          this._nDataBytes += a.sigBytes;
        },
        _process: function (a) {
          var c = this._data,
            e = c.words,
            j = c.sigBytes,
            k = this.blockSize,
            b = j / (4 * k),
            b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
          a = b * k;
          j = u.min(4 * a, j);
          if (a) {
            for (var q = 0; q < a; q += k) this._doProcessBlock(e, q);
            q = e.splice(0, a);
            c.sigBytes -= j;
          }
          return new r.init(q, j);
        },
        clone: function () {
          var a = t.clone.call(this);
          a._data = this._data.clone();
          return a;
        },
        _minBufferSize: 0,
      }));
    l.Hasher = q.extend({
      cfg: t.extend(),
      init: function (a) {
        this.cfg = this.cfg.extend(a);
        this.reset();
      },
      reset: function () {
        q.reset.call(this);
        this._doReset();
      },
      update: function (a) {
        this._append(a);
        this._process();
        return this;
      },
      finalize: function (a) {
        a && this._append(a);
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (a) {
        return function (b, e) {
          return new a.init(e).finalize(b);
        };
      },
      _createHmacHelper: function (a) {
        return function (b, e) {
          return new n.HMAC.init(a, e).finalize(b);
        };
      },
    });
    var n = (d.algo = {});
    return d;
  })(Math);
(function () {
  var u = CryptoJS,
    p = u.lib.WordArray;
  u.enc.Base64 = {
    stringify: function (d) {
      var l = d.words,
        p = d.sigBytes,
        t = this._map;
      d.clamp();
      d = [];
      for (var r = 0; r < p; r += 3)
        for (
          var w = (((l[r >>> 2] >>> (24 - 8 * (r % 4))) & 255) << 16) | (((l[(r + 1) >>> 2] >>> (24 - 8 * ((r + 1) % 4))) & 255) << 8) | ((l[(r + 2) >>> 2] >>> (24 - 8 * ((r + 2) % 4))) & 255), v = 0;
          4 > v && r + 0.75 * v < p;
          v++
        )
          d.push(t.charAt((w >>> (6 * (3 - v))) & 63));
      if ((l = t.charAt(64))) for (; d.length % 4;) d.push(l);
      return d.join("");
    },
    parse: function (d) {
      var l = d.length,
        s = this._map,
        t = s.charAt(64);
      t && ((t = d.indexOf(t)), -1 != t && (l = t));
      for (var t = [], r = 0, w = 0; w < l; w++)
        if (w % 4) {
          var v = s.indexOf(d.charAt(w - 1)) << (2 * (w % 4)),
            b = s.indexOf(d.charAt(w)) >>> (6 - 2 * (w % 4));
          t[r >>> 2] |= (v | b) << (24 - 8 * (r % 4));
          r++;
        }
      return p.create(t, r);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  };
})();
(function (u) {
  function p(b, n, a, c, e, j, k) {
    b = b + ((n & a) | (~n & c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function d(b, n, a, c, e, j, k) {
    b = b + ((n & c) | (a & ~c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function l(b, n, a, c, e, j, k) {
    b = b + (n ^ a ^ c) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  function s(b, n, a, c, e, j, k) {
    b = b + (a ^ (n | ~c)) + e + k;
    return ((b << j) | (b >>> (32 - j))) + n;
  }
  for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = (4294967296 * u.abs(u.sin(x + 1))) | 0;
  r = r.MD5 = v.extend({
    _doReset: function () {
      this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function (q, n) {
      for (var a = 0; 16 > a; a++) {
        var c = n + a,
          e = q[c];
        q[c] = (((e << 8) | (e >>> 24)) & 16711935) | (((e << 24) | (e >>> 8)) & 4278255360);
      }
      var a = this._hash.words,
        c = q[n + 0],
        e = q[n + 1],
        j = q[n + 2],
        k = q[n + 3],
        z = q[n + 4],
        r = q[n + 5],
        t = q[n + 6],
        w = q[n + 7],
        v = q[n + 8],
        A = q[n + 9],
        B = q[n + 10],
        C = q[n + 11],
        u = q[n + 12],
        D = q[n + 13],
        E = q[n + 14],
        x = q[n + 15],
        f = a[0],
        m = a[1],
        g = a[2],
        h = a[3],
        f = p(f, m, g, h, c, 7, b[0]),
        h = p(h, f, m, g, e, 12, b[1]),
        g = p(g, h, f, m, j, 17, b[2]),
        m = p(m, g, h, f, k, 22, b[3]),
        f = p(f, m, g, h, z, 7, b[4]),
        h = p(h, f, m, g, r, 12, b[5]),
        g = p(g, h, f, m, t, 17, b[6]),
        m = p(m, g, h, f, w, 22, b[7]),
        f = p(f, m, g, h, v, 7, b[8]),
        h = p(h, f, m, g, A, 12, b[9]),
        g = p(g, h, f, m, B, 17, b[10]),
        m = p(m, g, h, f, C, 22, b[11]),
        f = p(f, m, g, h, u, 7, b[12]),
        h = p(h, f, m, g, D, 12, b[13]),
        g = p(g, h, f, m, E, 17, b[14]),
        m = p(m, g, h, f, x, 22, b[15]),
        f = d(f, m, g, h, e, 5, b[16]),
        h = d(h, f, m, g, t, 9, b[17]),
        g = d(g, h, f, m, C, 14, b[18]),
        m = d(m, g, h, f, c, 20, b[19]),
        f = d(f, m, g, h, r, 5, b[20]),
        h = d(h, f, m, g, B, 9, b[21]),
        g = d(g, h, f, m, x, 14, b[22]),
        m = d(m, g, h, f, z, 20, b[23]),
        f = d(f, m, g, h, A, 5, b[24]),
        h = d(h, f, m, g, E, 9, b[25]),
        g = d(g, h, f, m, k, 14, b[26]),
        m = d(m, g, h, f, v, 20, b[27]),
        f = d(f, m, g, h, D, 5, b[28]),
        h = d(h, f, m, g, j, 9, b[29]),
        g = d(g, h, f, m, w, 14, b[30]),
        m = d(m, g, h, f, u, 20, b[31]),
        f = l(f, m, g, h, r, 4, b[32]),
        h = l(h, f, m, g, v, 11, b[33]),
        g = l(g, h, f, m, C, 16, b[34]),
        m = l(m, g, h, f, E, 23, b[35]),
        f = l(f, m, g, h, e, 4, b[36]),
        h = l(h, f, m, g, z, 11, b[37]),
        g = l(g, h, f, m, w, 16, b[38]),
        m = l(m, g, h, f, B, 23, b[39]),
        f = l(f, m, g, h, D, 4, b[40]),
        h = l(h, f, m, g, c, 11, b[41]),
        g = l(g, h, f, m, k, 16, b[42]),
        m = l(m, g, h, f, t, 23, b[43]),
        f = l(f, m, g, h, A, 4, b[44]),
        h = l(h, f, m, g, u, 11, b[45]),
        g = l(g, h, f, m, x, 16, b[46]),
        m = l(m, g, h, f, j, 23, b[47]),
        f = s(f, m, g, h, c, 6, b[48]),
        h = s(h, f, m, g, w, 10, b[49]),
        g = s(g, h, f, m, E, 15, b[50]),
        m = s(m, g, h, f, r, 21, b[51]),
        f = s(f, m, g, h, u, 6, b[52]),
        h = s(h, f, m, g, k, 10, b[53]),
        g = s(g, h, f, m, B, 15, b[54]),
        m = s(m, g, h, f, e, 21, b[55]),
        f = s(f, m, g, h, v, 6, b[56]),
        h = s(h, f, m, g, x, 10, b[57]),
        g = s(g, h, f, m, t, 15, b[58]),
        m = s(m, g, h, f, D, 21, b[59]),
        f = s(f, m, g, h, z, 6, b[60]),
        h = s(h, f, m, g, C, 10, b[61]),
        g = s(g, h, f, m, j, 15, b[62]),
        m = s(m, g, h, f, A, 21, b[63]);
      a[0] = (a[0] + f) | 0;
      a[1] = (a[1] + m) | 0;
      a[2] = (a[2] + g) | 0;
      a[3] = (a[3] + h) | 0;
    },
    _doFinalize: function () {
      var b = this._data,
        n = b.words,
        a = 8 * this._nDataBytes,
        c = 8 * b.sigBytes;
      n[c >>> 5] |= 128 << (24 - (c % 32));
      var e = u.floor(a / 4294967296);
      n[(((c + 64) >>> 9) << 4) + 15] = (((e << 8) | (e >>> 24)) & 16711935) | (((e << 24) | (e >>> 8)) & 4278255360);
      n[(((c + 64) >>> 9) << 4) + 14] = (((a << 8) | (a >>> 24)) & 16711935) | (((a << 24) | (a >>> 8)) & 4278255360);
      b.sigBytes = 4 * (n.length + 1);
      this._process();
      b = this._hash;
      n = b.words;
      for (a = 0; 4 > a; a++) (c = n[a]), (n[a] = (((c << 8) | (c >>> 24)) & 16711935) | (((c << 24) | (c >>> 8)) & 4278255360));
      return b;
    },
    clone: function () {
      var b = v.clone.call(this);
      b._hash = this._hash.clone();
      return b;
    },
  });
  t.MD5 = v._createHelper(r);
  t.HmacMD5 = v._createHmacHelper(r);
})(Math);
(function () {
  var u = CryptoJS,
    p = u.lib,
    d = p.Base,
    l = p.WordArray,
    p = u.algo,
    s = (p.EvpKDF = d.extend({
      cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }),
      init: function (d) {
        this.cfg = this.cfg.extend(d);
      },
      compute: function (d, r) {
        for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
          n && s.update(n);
          var n = s.update(d).finalize(r);
          s.reset();
          for (var a = 1; a < p; a++) (n = s.finalize(n)), s.reset();
          b.concat(n);
        }
        b.sigBytes = 4 * q;
        return b;
      },
    }));
  u.EvpKDF = function (d, l, p) {
    return s.create(p).compute(d, l);
  };
})();
CryptoJS.lib.Cipher ||
  (function (u) {
    var p = CryptoJS,
      d = p.lib,
      l = d.Base,
      s = d.WordArray,
      t = d.BufferedBlockAlgorithm,
      r = p.enc.Base64,
      w = p.algo.EvpKDF,
      v = (d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function (e, a) {
          return this.create(this._ENC_XFORM_MODE, e, a);
        },
        createDecryptor: function (e, a) {
          return this.create(this._DEC_XFORM_MODE, e, a);
        },
        init: function (e, a, b) {
          this.cfg = this.cfg.extend(b);
          this._xformMode = e;
          this._key = a;
          this.reset();
        },
        reset: function () {
          t.reset.call(this);
          this._doReset();
        },
        process: function (e) {
          this._append(e);
          return this._process();
        },
        finalize: function (e) {
          e && this._append(e);
          return this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function (e) {
          return {
            encrypt: function (b, k, d) {
              return ("string" == typeof k ? c : a).encrypt(e, b, k, d);
            },
            decrypt: function (b, k, d) {
              return ("string" == typeof k ? c : a).decrypt(e, b, k, d);
            },
          };
        },
      }));
    d.StreamCipher = v.extend({
      _doFinalize: function () {
        return this._process(!0);
      },
      blockSize: 1,
    });
    var b = (p.mode = {}),
      x = function (e, a, b) {
        var c = this._iv;
        c ? (this._iv = u) : (c = this._prevBlock);
        for (var d = 0; d < b; d++) e[a + d] ^= c[d];
      },
      q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
          return this.Encryptor.create(e, a);
        },
        createDecryptor: function (e, a) {
          return this.Decryptor.create(e, a);
        },
        init: function (e, a) {
          this._cipher = e;
          this._iv = a;
        },
      })).extend();
    q.Encryptor = q.extend({
      processBlock: function (e, a) {
        var b = this._cipher,
          c = b.blockSize;
        x.call(this, e, a, c);
        b.encryptBlock(e, a);
        this._prevBlock = e.slice(a, a + c);
      },
    });
    q.Decryptor = q.extend({
      processBlock: function (e, a) {
        var b = this._cipher,
          c = b.blockSize,
          d = e.slice(a, a + c);
        b.decryptBlock(e, a);
        x.call(this, e, a, c);
        this._prevBlock = d;
      },
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
      pad: function (a, b) {
        for (var c = 4 * b, c = c - (a.sigBytes % c), d = (c << 24) | (c << 16) | (c << 8) | c, l = [], n = 0; n < c; n += 4) l.push(d);
        c = s.create(l, c);
        a.concat(c);
      },
      unpad: function (a) {
        a.sigBytes -= a.words[(a.sigBytes - 1) >>> 2] & 255;
      },
    };
    d.BlockCipher = v.extend({
      cfg: v.cfg.extend({ mode: b, padding: q }),
      reset: function () {
        v.reset.call(this);
        var a = this.cfg,
          b = a.iv,
          a = a.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;
        else (c = a.createDecryptor), (this._minBufferSize = 1);
        this._mode = c.call(a, this, b && b.words);
      },
      _doProcessBlock: function (a, b) {
        this._mode.processBlock(a, b);
      },
      _doFinalize: function () {
        var a = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          a.pad(this._data, this.blockSize);
          var b = this._process(!0);
        } else (b = this._process(!0)), a.unpad(b);
        return b;
      },
      blockSize: 4,
    });
    var n = (d.CipherParams = l.extend({
      init: function (a) {
        this.mixIn(a);
      },
      toString: function (a) {
        return (a || this.formatter).stringify(this);
      },
    })),
      b = ((p.format = {}).OpenSSL = {
        stringify: function (a) {
          var b = a.ciphertext;
          a = a.salt;
          return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
        },
        parse: function (a) {
          a = r.parse(a);
          var b = a.words;
          if (1398893684 == b[0] && 1701076831 == b[1]) {
            var c = s.create(b.slice(2, 4));
            b.splice(0, 4);
            a.sigBytes -= 16;
          }
          return n.create({ ciphertext: a, salt: c });
        },
      }),
      a = (d.SerializableCipher = l.extend({
        cfg: l.extend({ format: b }),
        encrypt: function (a, b, c, d) {
          d = this.cfg.extend(d);
          var l = a.createEncryptor(c, d);
          b = l.finalize(b);
          l = l.cfg;
          return n.create({ ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format });
        },
        decrypt: function (a, b, c, d) {
          d = this.cfg.extend(d);
          b = this._parse(b, d.format);
          return a.createDecryptor(c, d).finalize(b.ciphertext);
        },
        _parse: function (a, b) {
          return "string" == typeof a ? b.parse(a, this) : a;
        },
      })),
      p = ((p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
          d || (d = s.random(8));
          a = w.create({ keySize: b + c }).compute(a, d);
          c = s.create(a.words.slice(b), 4 * c);
          a.sigBytes = 4 * b;
          return n.create({ key: a, iv: c, salt: d });
        },
      }),
      c = (d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({ kdf: p }),
        encrypt: function (b, c, d, l) {
          l = this.cfg.extend(l);
          d = l.kdf.execute(d, b.keySize, b.ivSize);
          l.iv = d.iv;
          b = a.encrypt.call(this, b, c, d.key, l);
          b.mixIn(d);
          return b;
        },
        decrypt: function (b, c, d, l) {
          l = this.cfg.extend(l);
          c = this._parse(c, l.format);
          d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
          l.iv = d.iv;
          return a.decrypt.call(this, b, c, d.key, l);
        },
      }));
  })();
(function () {
  for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : (c << 1) ^ 283;
  for (var e = 0, j = 0, c = 0; 256 > c; c++) {
    var k = j ^ (j << 1) ^ (j << 2) ^ (j << 3) ^ (j << 4),
      k = (k >>> 8) ^ (k & 255) ^ 99;
    l[e] = k;
    s[k] = e;
    var z = a[e],
      F = a[z],
      G = a[F],
      y = (257 * a[k]) ^ (16843008 * k);
    t[e] = (y << 24) | (y >>> 8);
    r[e] = (y << 16) | (y >>> 16);
    w[e] = (y << 8) | (y >>> 24);
    v[e] = y;
    y = (16843009 * G) ^ (65537 * F) ^ (257 * z) ^ (16843008 * e);
    b[k] = (y << 24) | (y >>> 8);
    x[k] = (y << 16) | (y >>> 16);
    q[k] = (y << 8) | (y >>> 24);
    n[k] = y;
    e ? ((e = z ^ a[a[a[G ^ z]]]), (j ^= a[a[j]])) : (e = j = 1);
  }
  var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    d = (d.AES = p.extend({
      _doReset: function () {
        for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = (this._keySchedule = []), j = 0; j < a; j++)
          if (j < d) e[j] = c[j];
          else {
            var k = e[j - 1];
            j % d
              ? 6 < d && 4 == j % d && (k = (l[k >>> 24] << 24) | (l[(k >>> 16) & 255] << 16) | (l[(k >>> 8) & 255] << 8) | l[k & 255])
              : ((k = (k << 8) | (k >>> 24)), (k = (l[k >>> 24] << 24) | (l[(k >>> 16) & 255] << 16) | (l[(k >>> 8) & 255] << 8) | l[k & 255]), (k ^= H[(j / d) | 0] << 24));
            e[j] = e[j - d] ^ k;
          }
        c = this._invKeySchedule = [];
        for (d = 0; d < a; d++) (j = a - d), (k = d % 4 ? e[j] : e[j - 4]), (c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[(k >>> 16) & 255]] ^ q[l[(k >>> 8) & 255]] ^ n[l[k & 255]]);
      },
      encryptBlock: function (a, b) {
        this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l);
      },
      decryptBlock: function (a, c) {
        var d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d;
        this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
        d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d;
      },
      _doCryptBlock: function (a, b, c, d, e, j, l, f) {
        for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
          var q = d[g >>> 24] ^ e[(h >>> 16) & 255] ^ j[(k >>> 8) & 255] ^ l[n & 255] ^ c[p++],
            s = d[h >>> 24] ^ e[(k >>> 16) & 255] ^ j[(n >>> 8) & 255] ^ l[g & 255] ^ c[p++],
            t = d[k >>> 24] ^ e[(n >>> 16) & 255] ^ j[(g >>> 8) & 255] ^ l[h & 255] ^ c[p++],
            n = d[n >>> 24] ^ e[(g >>> 16) & 255] ^ j[(h >>> 8) & 255] ^ l[k & 255] ^ c[p++],
            g = q,
            h = s,
            k = t;
        q = ((f[g >>> 24] << 24) | (f[(h >>> 16) & 255] << 16) | (f[(k >>> 8) & 255] << 8) | f[n & 255]) ^ c[p++];
        s = ((f[h >>> 24] << 24) | (f[(k >>> 16) & 255] << 16) | (f[(n >>> 8) & 255] << 8) | f[g & 255]) ^ c[p++];
        t = ((f[k >>> 24] << 24) | (f[(n >>> 16) & 255] << 16) | (f[(g >>> 8) & 255] << 8) | f[h & 255]) ^ c[p++];
        n = ((f[n >>> 24] << 24) | (f[(g >>> 16) & 255] << 16) | (f[(h >>> 8) & 255] << 8) | f[k & 255]) ^ c[p++];
        a[b] = q;
        a[b + 1] = s;
        a[b + 2] = t;
        a[b + 3] = n;
      },
      keySize: 8,
    }));
  u.AES = p._createHelper(d);
})();

CryptoJS.mode.CFB = (function () {
  function g(c, b, e, a) {
    var d = this._iv;
    d ? ((d = d.slice(0)), (this._iv = void 0)) : (d = this._prevBlock);
    a.encryptBlock(d, 0);
    for (a = 0; a < e; a++) c[b + a] ^= d[a];
  }
  var f = CryptoJS.lib.BlockCipherMode.extend();
  f.Encryptor = f.extend({
    processBlock: function (c, b) {
      var e = this._cipher,
        a = e.blockSize;
      g.call(this, c, b, a, e);
      this._prevBlock = c.slice(b, b + a);
    },
  });
  f.Decryptor = f.extend({
    processBlock: function (c, b) {
      var e = this._cipher,
        a = e.blockSize,
        d = c.slice(b, b + a);
      g.call(this, c, b, a, e);
      this._prevBlock = d;
    },
  });
  return f;
})();