
var Window = function(tabs) {
    this.tabs = tabs;
  };
  
  
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); 
    return this;
  };
  
  
  Window.prototype.tabClose = function (index) {
  

  
    var tabsBeforeIndex = this.tabs.splice(0,index); // Get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    
  
    return this;
   };
  

  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  
  var finalTabs = socialWindow
    .tabOpen() 
    .join(videoWindow.tabClose(2)) 
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);