chrome.commands.onCommand.addListener((command) => {
    if (command === "log-variables") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: logVariables
            });
        });
    }
});

function logVariables() {
    const variables = window;
    const result = {};
    for (let prop in variables) {
        if (variables.hasOwnProperty(prop)) {
            result[prop] = variables[prop];
        }
    }
    console.log(JSON.stringify(result, null, 2));
}
