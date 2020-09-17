	document.onkeydown = function(e) {
		if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {}
		if (e.shiftKey && (event.button == 2 || event.button == 3)) {}
		return false;
	};
	function click() {
		if (event.button == 2 || event.button == 3) {
			oncontextmenu = 'return false';
			function disableWheelScroll() {
				if (document.body.addEventListener) document.body.addEventListener('DOMMouseScroll', blockWheel, false);
				document.body.onmousewheel = blockWheel;
			}
			function blockWheel(event) {
				if (!event) event = window.event;
				if (event.stopPropagation) event.stopPropagation();
				else event.cancelBubble = true;
				if (event.preventDefault) event.preventDefault();
				else event.returnValue = false;
			}
			disableWheelScroll();
		}
	}
	document.onmousedown = click
	document.oncontextmenu = new Function("return false;")
//	document.oncontextmenu = new Function("return true;")
// Here we will detect any form of addons used to open chrome developer tools


(function() {
    try {
        var $_console$$ = console;
        Object.defineProperty(window, "console", {
            get: function() {
                if ($_console$$._commandLineAPI)
                    throw "Sorry, for security reasons, the script console is deactivated on this website";
                return $_console$$
            },
            set: function($val$$) {
                $_console$$ = $val$$
            }
        })
    } catch ($ignore$$) {
    }
})();


const disableDevtools = callback => {
  const original = Object.getPrototypeOf;

  Object.getPrototypeOf = (...args) => {
    if (Error().stack.includes("getCompletions")) callback();
    return original(...args);
  };
};

disableDevtools(() => {
  console.error("devtools has been disabled");

  while (1);
});



(function() {
    try {
        var $_console$$ = console;
        Object.defineProperty(window, "console", {
            get: function() {
                if ($_console$$._commandLineAPI)
                    throw "Sorry, for security reasons, the script console is deactivated on this website";
                return $_console$$
            },
            set: function($val$$) {
                $_console$$ = $val$$
            }
        })
    } catch ($ignore$$) {
    }
})();
