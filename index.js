document.getElementById("bombastico").addEventListener("click", async () => {
    try {
        let tabs = await chrome.tabs.query({ active: true, currentWindow: true });

        if (!tabs.length) {
            console.error("No active tab found.");
            return;
        }

        let tabId = tabs[0].id;

        await chrome.scripting.executeScript({
            target: { tabId },
            files : ['main.js']
        });

    } catch (error) {
        console.error("Error executing script:", error);
    }
});
