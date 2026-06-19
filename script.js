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
        <p>Pixel-Art</p>

        <img class="imageDisplay" src="images/pixel-art/Computer.gif" alt="Computer pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/A Goatly Stare Main.png" alt="Goatly Stare pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/ContentWarningSmash.png" alt="Content Warning pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/Duck_Swim.gif" alt="Duck_Swim pixel-art"/>
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
        <img class="imageDisplay" src="images/pixel-art/frog.png" alt="frog pixel-art"/>
        <img class="imageDisplay" src="images/pixel-art/june_frog.png" alt="pride-frog pixel-art"/>
      `
  },
  {
    title: "Traditional Art",
    content: `
        <p>
          Traditional Art
        </p>
        <img class="imageDisplay" src="images/traditional-art/LethalCompanyThumbnail.png"/>
        <img class="imageDisplay" src="images/traditional-art/Wolke.png" alt="test"/>
        <img class="imageDisplay" src="images/traditional-art/Kirby.png"/>
        <img class="imageDisplay" src="images/traditional-art/foto (1).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (2).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (3).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (4).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (5).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (6).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (7).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (8).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (9).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (10).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (11).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/foto (12).jpg"/>
        <img class="imageDisplay" src="images/traditional-art/SpiderGabl.png"/>
        <img class="imageDisplay" src="images/traditional-art/Schulblatt.png"/>
      `
  },
  {
    title: "3D-Modelling",
    content: `
        <p>
          3D-Modelling
        </p>
        <img class="imageDisplay" src="images/3d-models/horizontal_rotierender_fisch.gif"/>
        <img class="imageDisplay" src="images/3d-models/luffy_hat.gif"/>
        <img class="imageDisplay" src="images/3d-models/Pokeball.gif"/>
        <img class="imageDisplay" src="images/3d-models/Vending_Machine_Test.gif"/>
      `
  },
  {
    title: "Asset-Packs",
    content: `
        <p contenteditable="true">
          Here's some sample text. You can even type in here because contenteditable is true!
        </p>
        
        <iframe frameborder="0" src="https://itch.io/embed/4326949?linkback=true&amp;border_width=4&amp;bg_color=ceefb8&amp;fg_color=222222&amp;link_color=37cf4b&amp;border_color=8e966c" width="100%" height="173"><a href="https://gabl18.itch.io/pixel-art-duck">Pixel Art Duck by Gabl</a></iframe>

        <div class="imageScrollBar">
          <img class="assetImageDisplay" src="images/asset-packs/Display1.gif"/>
          <img class="assetImageDisplay" src="images/asset-packs/Display2.gif"/>
        </div>

        <iframe frameborder="0" src="https://itch.io/embed/3425305?linkback=true&amp;border_width=4&amp;bg_color=ceefb8&amp;fg_color=222222&amp;link_color=37cf4b&amp;border_color=8e966c" width="100%" height="173"><a href="https://gabl18.itch.io/pixel-art-clouds">Pixel Art Clouds by Gabl</a></iframe>

        <div class="imageScrollBar">
          <img class="assetImageDisplay" src="images/asset-packs/cloud_spritesheet.png"/>
          <img class="assetImageDisplay" src="images/asset-packs/thin_cloud_timelapse.gif"/>
          <img class="assetImageDisplay" src="images/asset-packs/weird_cloud_timelapse.gif"/>
        </div>

        <iframe frameborder="0" src="https://itch.io/embed/3414405?linkback=true&amp;border_width=4&amp;bg_color=ceefb8&amp;fg_color=222222&amp;link_color=37cf4b&amp;border_color=8e966c" width="100%" height="173"><a href="https://gabl18.itch.io/110-free-pixelmojis">100+ Pixelmojis Asset Pack by Gabl</a></iframe>

        <div class="imageScrollBar">
          <img class="assetImageDisplay" src="images/asset-packs/Pixelmojis.png"/>
        </div>

        <iframe frameborder="0" src="https://itch.io/embed/3617606?linkback=true&amp;border_width=4&amp;bg_color=ceefb8&amp;fg_color=222222&amp;link_color=37cf4b&amp;border_color=8e966c" width="100%" height="173"><a href="https://gabl18.itch.io/simple-pixel-cursors">Simple Pixel Cursors by Gabl</a></iframe>

        <div class="imageScrollBar">
          <img class="assetImageDisplay" src="images/asset-packs/foto1.png"/>
          <img class="assetImageDisplay" src="images/asset-packs/foto2.png"/>
        </div>

        <iframe frameborder="0" src="https://itch.io/embed/4464187?linkback=true&amp;border_width=4&amp;bg_color=ceefb8&amp;fg_color=222222&amp;link_color=37cf4b&amp;border_color=8e966c" width="100%" height="173"><a href="https://gabl18.itch.io/bubbly-mess-font">Bubbly Mess Font by Gabl</a></iframe>

        <div class="imageScrollBar">
          <img class="assetImageDisplay" src="images/asset-packs/Bubbly Mess Display2.png"/>
          <img class="assetImageDisplay" src="images/asset-packs/Bubbly Mess Lite Display2.png"/>
        </div>
        
        <iframe frameborder="0" src="https://itch.io/embed/3773673?linkback=true&amp;border_width=4&amp;bg_color=ceefb8&amp;fg_color=222222&amp;link_color=37cf4b&amp;border_color=8e966c" width="100%" height="173"><a href="https://gabl18.itch.io/sharp-mess-font">Sharp Mess Font by Gabl</a></iframe>

        <div class="imageScrollBar">
          <img class="assetImageDisplay" src="images/asset-packs/SHARP_MESS image_outline-export.png"/>
          <img class="assetImageDisplay" src="images/asset-packs/SHARP_MESS LITE image_outline-export.png"/>
        </div>

        <iframe frameborder="0" src="https://itch.io/embed/3927057?linkback=true&amp;border_width=4&amp;bg_color=d2a6e8&amp;fg_color=222222&amp;link_color=6b3e75&amp;border_color=6e2e89" width="100%" height="173"><a href="https://gabl18.itch.io/haunted-asset-pack">Haunted Asset Pack by Gabl</a></iframe>

        <div class="imageScrollBar">
          <img class="assetImageDisplay" src="images/asset-packs/Ghost Display.gif"/>
          <img class="assetImageDisplay" src="images/asset-packs/Ghost Display 2.gif"/>
          <img class="assetImageDisplay" src="images/asset-packs/Crow+Bat Display.gif"/>
          <img class="assetImageDisplay" src="images/asset-packs/Pumpkins Display.png"/>
          <img class="assetImageDisplay" src="images/asset-packs/Tombstones Display.png"/>
          <img class="assetImageDisplay" src="images/asset-packs/Moons Display.png"/>
          <img class="assetImageDisplay" src="images/asset-packs/Scenic_Display.gif"/>
        </div>
      `
  },
  {
    title: "Video-Projects",
    content: `
        <p>
          Video-Projects
        </p>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sQsBiKPdP5Q?si=7Qre43DK3cBVaz7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <img class="imageDisplay" src="images/video-projects/Stack.gif"/>

        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YMMsoWRxCgk?si=DlKdTfG3yAkTiC7N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <img class="imageDisplay" src="images/video-projects/Gabl18.gif"/>
      `
  }
];


function setArtContent(index) {
  var artContent = document.querySelector("#artContent");
  artContent.innerHTML = content[index].content;

  var artTitle = document.querySelector("#artWindowTitle");
  if (artTitle) {
    artTitle.innerText = content[index].title;
  }
}


function addToSideBar(index) {
  var sidebar = document.querySelector("#sidebar");
  var art = content[index];
  
 
  var newDiv = document.createElement("div");
  newDiv.innerHTML = art.title;
  newDiv.style.cursor = "url(images/cursors/pointer.png), auto";
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

// Funktion, um die Lightbox für ALLE Bilder im Betriebssystem zu aktivieren
document.addEventListener("click", function(e) {
  // Wenn das geklickte Element die Klasse "imageDisplay" oder "assetImageDisplay" hat
  if (e.target.classList.contains("imageDisplay") || e.target.classList.contains("assetImageDisplay")) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    
    lightboxImg.src = e.target.src; // Bildquelle kopieren
    lightbox.style.display = "flex"; // Lightbox anzeigen
  }
});

// Schließen der Lightbox bei Klick irgendwo auf die schwarze Fläche
document.getElementById("lightbox").addEventListener("click", function() {
  this.style.display = "none";
});

// Standardmäßig die erste Notiz anzeigen beim Start
setArtContent(0);