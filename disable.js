const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
alert('Script Enabled (debug purposes)')
const disoren = prompt('Would you like to enable or disable the listed extensions? (DISABLE or ENABLE)','DISABLE')
if(disoren = 'ENABLE'){
    alert('For this script to work, you need to be at the google webstore page. Taking you there now.')
    window.location.href = 'https://chrome.google.com/webstore'
    const extensionsToDisable = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo"]
    for( e in extensionsToDisable ){
        chrome.management.setEnabled(extensionsToDisable[e], true,)
    }
    if (extensionsToDisable.length > 1) {
        alert('Operation completed and '+ extensionsToDisable.length +' extensions have been disabled.')
    } else {
        alert('Operation completed and '+ extensionsToDisable.length +' extension has been disabled.')
    }
    
} else {
    alert('For this script to work, you need to be at the google webstore page. Taking you there now.')
    window.location.href = 'https://chrome.google.com/webstore'
const extensionsToDisable = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo"]
const getreal = ["bgnkhhnnamicmpeenaelnjfhikgbkllg", " hdokiejnpimakedhajhdlcegeplioahd"]
for( e in extensionsToDisable ){
    chrome.management.setEnabled(extensionsToDisable[e], false,)
}
if (extensionsToDisable.length > 1) {
    alert('Operation completed and '+ extensionsToDisable.length +' extensions have been disabled.')
} else {
    alert('Operation completed and '+ extensionsToDisable.length +' extension has been disabled.')
}
}
