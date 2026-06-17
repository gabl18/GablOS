function updateTime() {
            var currentTime = new Date().toLocaleString('en-gb');
            var timeText = document.querySelector("#time-element");
            timeText.innerHTML = currentTime
        }
        setInterval(updateTime, 1000);




// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#aboutMe"));
dragElement(document.querySelector("#notes"))

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



var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")

var aboutMeScreen = document.querySelector("#aboutMe")
var aboutMeScreenClose = document.querySelector("#aboutMeclose")
var aboutMeScreenOpen = document.querySelector("#aboutMeApp")

var notesScreen = document.querySelector("#notes")
var notesScreenClose = document.querySelector("#notesClose")
var notesScreenOpen = document.querySelector("#notesApp")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});


aboutMeScreenClose.addEventListener("click", function() {
  closeWindow(aboutMeScreen);
});

aboutMeScreenOpen.addEventListener("click", function() {
  openWindow(aboutMeScreen);
});


notesScreenClose.addEventListener("click", function() {
  closeWindow(notesScreen);
});

notesScreenOpen.addEventListener("click", function() {
  openWindow(notesScreen);
});

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = element
} 

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}



var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

var topBar = document.querySelector("#top-bar")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

//function initializeWindow(elementName) {
//  var screen = document.querySelector("#" + elementName)
//  addWindowTapHandling(screen)
//  makeClosable(elementName)
//  dragElement(screen)
//}

//initializeWindow("aboutMeScreen")



var content = [
  {
    title: "Welcome",
    date: "06/28/2023",
    content: `
              <p contenteditable="True">
          <span contenteditable="true">Welcome to <strong>Hacker Notes</strong>
            </br>
            </br>
            <img src=""
              style="width: 96px; border-radius: 16px" />
            </br>
            </br>

            This is a place where I store my thoughts as they come to mind. What exactly will you find when browsing
            through
            these notes? As I <del>once said</del> <ins>always say</ins>
          </span>
        <blockquote
          style="background-color: #F9F9F9; margin-top: 16x; margin-bottom: 16px; margin-left: 0px; margin-right: 0px; padding: 16px; border-radius: 16px;"
          contenteditable="true">
          <i>Time Will Tell
            </br>
            ~ Thomas
          </i>
        </blockquote>
        <span contenteditable="true">
          I suppose you may see a bit of content about technology. Perhaps some insights regarding recent projects.
          Maybe
          even some thoughts regarding nature & tea? Go and find out!
        </span>
        </p>
      `
  },
    {
    title: "Sample Text",
    date: "06/28/2023",
    content: `
              <p contenteditable="True">
          Here's some sample text
        </p>
      `
  }
]

function setNotesContent(index) {

  var notesContent = document.querySelector("#notesContent")

  notesContent.innerHTML = content[index].content
}

setNotesContent(0)

function addToSideBar(index) {
	var sidebar = document.querySelector("#sidebar");
  var note = content[index];
  var newDiv = document.createElement("div");
}

