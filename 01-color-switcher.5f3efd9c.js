const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(){n.start()})),t.stopBtn.addEventListener("click",(function(){n.stop()}));const n={intervalId:null,start(){this.intervalId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.startBtn.disabled=!0}),1e3)},stop(){clearInterval(this.intervalId),t.startBtn.disabled=!1}};
//# sourceMappingURL=01-color-switcher.5f3efd9c.js.map
