// popup.js

function displayTrackedTime() {
    chrome.storage.local.get({ trackedSites: {} }, (result) => {
      const trackedSites = result.trackedSites || {};
      const trackedSitesList = document.getElementById('tracked-sites');
  
      // Clear the existing list
      trackedSitesList.innerHTML = '';
  
      // Display tracked time for each site
      if (Object.keys(trackedSites).length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No tracked sites yet.';
        trackedSitesList.appendChild(listItem);
      } else {
        for (const [url, data] of Object.entries(trackedSites)) {
          const listItem = document.createElement('li');
          listItem.textContent = `${url}: ${data.totalTime} milliseconds`;
          trackedSitesList.appendChild(listItem);
        }
      }
    });
  }
  
  // Display tracked time when the popup is opened
  displayTrackedTime();
  