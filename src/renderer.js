/* eslint-env browser */
(() => {
  const preventDrop = e => {
    e.preventDefault();
    return false;
  };
  document.addEventListener("drop", preventDrop);
  document.addEventListener("dragover", preventDrop);
}) ();
