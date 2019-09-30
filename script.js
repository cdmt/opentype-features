opentypeFeature = (feature, title1, title2) => {
  const element = document.getElementById(feature);
  let btn = event.target.innerText
  if (element.classList.contains(feature)) {
    element.classList.remove(feature);
  } else {
    element.classList.add(feature);
  }
  if (event.target.innerText == title1) {
    event.target.innerText = title2
  } else {
    event.target.innerText = title1
  }

}
