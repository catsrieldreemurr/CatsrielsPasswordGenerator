"use strict";
// Options References 
const standardbox = document.getElementById("standardbox"); // Standard Password Length
const enableHumanPasswords = document.getElementById("enableHumanPasswords"); // Enable Human Passwords Button
const HumanReadablebox = document.getElementById("HumanReadablebox"); // Human Readable Passwords Length
const disableUnderscores = document.getElementById("disableUnderscores");
// Other References
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const passField = document.getElementById("passField");
// Functions
function setInnerHTML(obj, msg) {
    if (obj) {
        obj.innerHTML = msg;
    }
}
function standardGenerator(length) {
    let placeholder = "";
    if (humanReadableEnabled === false) {
        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * possibleCharacters.length);
            placeholder = placeholder + possibleCharacters[random];
        }
        setInnerHTML(passField, placeholder);
        return placeholder;
    }
    else {
        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * words.length);
            if (disableUnderscoreBool === false) {
                placeholder = placeholder + "_" + words[random];
            }
            else {
                placeholder = placeholder + words[random];
            }
        }
        let random2 = Math.floor(Math.random() * 1000);
        placeholder = placeholder + String(random2);
        let randomSpecial = Math.floor(Math.random() * specialCharacters.length);
        placeholder = placeholder + String(specialCharacters[randomSpecial]);
        if (disableUnderscoreBool === false) {
            placeholder = placeholder.substring(1);
        }
        setInnerHTML(passField, placeholder);
        return placeholder;
    }
}
function checkMode(standardString) {
    let standardNum = 20;
    if (standardString !== "") {
        standardNum = Number(standardString);
    }
    else {
        if (humanReadableEnabled) {
            standardNum = 2;
        }
        else {
            standardNum = 20;
        }
    }
    if (humanReadableEnabled) // Human-Readable Generator
     {
        // Check range
        if (standardNum > 6) {
            standardNum = 6;
        }
        else if (standardNum <= 0) {
            standardNum = 2;
        }
    }
    else // Standard Generator  
     {
        if (standardNum > 100) {
            standardNum = 100;
        }
        else if (standardNum <= 0) {
            standardNum = 20;
        }
    }
    return standardNum;
}
// Global variables 
let humanReadableEnabled = false;
let disableUnderscoreBool = false;
const possibleCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890~!@#$%^&*()_+=?/";
const specialCharacters = "!@+=?#$%^*";
let current = "";
const words = [
    "March",
    "Trail",
    "Update",
    "Enjoy",
    "Intensify",
    "Option",
    "Conceive",
    "Glasses",
    "Stool",
    "Page",
    "Increase",
    "Classroom",
    "Bell",
    "Driver",
    "Observer",
    "Drift",
    "Deteriorate",
    "Acceptable",
    "Satellite",
    "Miscarriage",
    "Leader",
    "Copyright",
    "Overwhelm",
    "Maximum",
    "Pier",
    "Charm",
    "Work",
    "Show",
    "Climate",
    "Jam",
    "Sleeve",
    "Person",
    "Behead",
    "Presentation",
    "Peel",
    "Essay",
    "Empire",
    "World",
    "Tent",
    "Quota",
    "Basketball",
    "Hook",
    "Blackmail",
    "Calculation",
    "Coat",
    "Shock",
    "Hardware",
    "Systematic",
    "Face",
    "Harbor",
    "Wire",
    "Guess",
    "Menu",
    "Vision",
    "Paint",
    "Economy",
    "Meeting",
    "Multiply",
    "Culture",
    "Blade",
    "Divorce",
    "Poem",
    "Cup",
    "Disturbance",
    "Shame",
    "Myth",
    "Crack",
    "Revoke",
    "Interactive",
    "Flock",
    "Folklore",
    "Session",
    "Drive",
    "Unlawful",
    "Raw",
    "Mountain",
    "Reconcile",
    "Twin",
    "Science",
    "Duty",
    "Rehearsal",
    "Enhance",
    "Deny",
    "Coat",
    "Extraterrestrial",
    "Spite",
    "Hobby",
    "Driver",
    "Change",
    "Convulsion",
    "Solid",
    "Bear",
    "Capture",
    "Venus",
    "Of",
    "Mouse",
    "Party",
    "Publish",
    "Inspire"
];
// Main Code
generateButton === null || generateButton === void 0 ? void 0 : generateButton.addEventListener("click", () => {
    let standardLengthString = "";
    if (humanReadableEnabled) {
        standardLengthString = HumanReadablebox.value;
    }
    else {
        standardLengthString = standardbox.value;
    }
    let standardLength;
    standardLength = checkMode(standardLengthString);
    current = standardGenerator(standardLength);
});
enableHumanPasswords === null || enableHumanPasswords === void 0 ? void 0 : enableHumanPasswords.addEventListener("click", () => {
    humanReadableEnabled = !humanReadableEnabled;
    if (humanReadableEnabled) {
        enableHumanPasswords.style.backgroundColor = "lime";
        enableHumanPasswords.innerHTML = "True";
    }
    else {
        enableHumanPasswords.style.backgroundColor = "red";
        enableHumanPasswords.innerHTML = "False";
    }
});
disableUnderscores === null || disableUnderscores === void 0 ? void 0 : disableUnderscores.addEventListener("click", () => {
    disableUnderscoreBool = !disableUnderscoreBool;
    if (disableUnderscoreBool) {
        disableUnderscores.style.backgroundColor = "lime";
        disableUnderscores.innerHTML = "True";
    }
    else {
        disableUnderscores.style.backgroundColor = "red";
        disableUnderscores.innerHTML = "False";
    }
});
copyButton === null || copyButton === void 0 ? void 0 : copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(current);
    alert("Password Copied.");
});
