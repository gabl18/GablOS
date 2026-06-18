function updateTime() {
            var currentTime = new Date().toLocaleString('en-gb');
            var timeText = document.querySelector("#time-element");
            timeText.innerHTML = currentTime
        }
        setInterval(updateTime, 1000);




// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#aboutMe"));
dragElement(document.querySelector("#art"))

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



// Globaler Zähler für die Fenster-Reihenfolge
var biggestIndex = 1;
var topBar = document.querySelector("#top-bar");


function openWindow(windowElement) {
  windowElement.style.display = "flex";
  biggestIndex++;
  windowElement.style.zIndex = biggestIndex;
}

function closeWindow(windowElement) {
  windowElement.style.display = "none";
}

function focusWindow(windowElement) {
  biggestIndex++;
  windowElement.style.zIndex = biggestIndex;
}

// Fenster nach vorn
document.querySelectorAll(".window").forEach(function(win) {
  win.addEventListener("mousedown", function() {
    focusWindow(win);
  });
});

// Close-Button automatisch finden
document.querySelectorAll(".closebutton").forEach(function(button) {
  button.addEventListener("click", function(e) {
    // e.target ist der Button. .closest(".window") sucht das Fenster
    var currentWindow = e.target.closest(".window");
    closeWindow(currentWindow);
    e.stopPropagation();
  });
});

// dynamisch das Fenster, das in "data-window" steht
document.querySelectorAll(".appStyling").forEach(function(app) {
  app.addEventListener("click", function() {
    var windowId = app.getAttribute("data-window");
    var targetWindow = document.getElementById(windowId);
    
    if (targetWindow) {
      openWindow(targetWindow);
    }
  });
});

// Sonderfall
var welcomeOpenTrigger = document.querySelector("#welcomeopen");
if (welcomeOpenTrigger) {
  welcomeOpenTrigger.addEventListener("click", function() {
    openWindow(document.getElementById("welcome"));
  });
}


var content = [
  {
    title: "Overwiew",
    content: `
        <p contenteditable="true">
          <span>Test 1
          </span>
          <blockquote style="background-color: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px;">
            <i>TEST<br>TEST</i>
          </blockquote>
        </p>
      `
  },
  {
    title: "Pixel-Art",
    content: `
        <p>
          Pixel-Art
        </p>
        <img class="imageDisplay" src="images/pixel-art/Computer.gif" alt="Computer pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/A Goatly Stare Main.png" alt="Goatly Stare pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/ContentWarningSmash.png" alt="Content Warning pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Duck_Swim.gif" alt="Duck_Swim pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/frog.png" alt="frog pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/june_frog.png" alt="pride-frog pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Ghost.gif" alt="Ghost pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Goat.gif" alt="Goat pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/GablPixelHorror.png" alt="GablPixelHorror pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Mario_Gab_blue.png" alt="Mario_Gab_blue pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Jackbox Boxer Champed UP Outline Transparent.png" alt="Jackbox Boxer Champed UP pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/MelonGuyHand.png" alt="MelonGuyHand pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Mlem_Final.png" alt="Derpy Cat pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Repo_Covr.png" alt="Video-Game pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Repo_McDonald.png" alt="Video-Game pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/RepoPFPPurple.png" alt="Video-Game pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Sad-Vibes.png" alt="Forest pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Shooter.gif" alt="Video-Game pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Sonic Test.gif" alt="Video-Game pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Special_Cards_Balatro_AmongUS.png" alt="Card pixel-art"/>
      `
  },
  {
    title: "Traditional Art",
    content: `
        <p contenteditable="true">
          Here's some sample text. You can even type in here because contenteditable is true!
        </p>
      `
  },
  {
    title: "Asset-Packs",
    content: `
        <p contenteditable="true">
          Here's some sample text. You can even type in here because contenteditable is true!
        </p>
      `
  },
  {
    title: "Art-Projects",
    content: `
        <p contenteditable="true">
          Here's some sample text. You can even type in here because contenteditable is true!
        </p>
      `
  }
];


function setArtContent(index) {
  var artContent = document.querySelector("#artContent");
  artContent.innerHTML = content[index].content;
}


function addToSideBar(index) {
  var sidebar = document.querySelector("#sidebar");
  var art = content[index];
  
 
  var newDiv = document.createElement("div");
  newDiv.innerHTML = art.title;
  newDiv.style.cursor = "pointer";
  newDiv.style.padding = "5px";
  newDiv.style.marginBottom = "5px";
  newDiv.style.borderRadius = "4px";
  newDiv.style.backgroundColor = "rgba(255,255,255,0.1)";

  // Wenn man auf den Titel klickt, soll die Notiz geladen werden
  newDiv.addEventListener("click", function() {
    setArtContent(index);
  });

  // Ab in die Sidebar damit!
  sidebar.appendChild(newDiv);
}

// 4. AUTOMATION: Wir gehen alle Notizen im "content"-Array durch und bauen die App auf
for (var i = 0; i < content.length; i++) {
  addToSideBar(i);
}

// Standardmäßig die erste Notiz anzeigen beim Start
setArtContent(0);