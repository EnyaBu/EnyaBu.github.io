function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => (tab.style.display = "none"));

  // Show selected tab
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = "block";
  }
}
