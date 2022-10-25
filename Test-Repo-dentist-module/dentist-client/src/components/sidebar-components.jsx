// import React, {useState} from 'react';

// export const useHighLight = () => {
// const [isHighlight, setIsHighlight] = useState(false);
// const setOverlayOnElement = (elem, id) => {
//   const rect = elem.getBoundingClientRect();
//   const x = rect.left;
//   const y = rect.top;
//   const w = rect.width;
//   const h = rect.height;
//   const overlay = document.createElement("div");
//   overlay.setAttribute("id", id);
//   overlay.style.width = `${w}px`;
//   overlay.style.height = `${h}px`;
//   overlay.style.top = `${y}px`;
//   overlay.style.left = `${x}px`;
//   overlay.style.position = "absolute";
//   elem.classList.add("overlayActive");
//   document.body.appendChild(overlay);
//  }
// const highlightElement = (targetID) => {
//   const elem = document.getElementById(targetID);
//   if (elem) {
//   setOverlayOnElement(elem, "overlayID");
//   setIsHighlight(true);
//   }
// };
// const removeHighlightElement = (targetID) => {
//   const elem = document.getElementById(targetID);
//   const myobj = document.getElementById("overlayID");
//   elem.classList.remove("overlayActive");
//   myobj.remove();
//   setIsHighlight(false);
// };
// return {
//   highlightElement,
//   removeHighlightElement,
//   isHighlight
//  };
// };