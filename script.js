opentypeFeature = (feature) => {
  const element = document.getElementById(feature);
  if (element.classList.contains(feature)) {
    element.classList.remove(feature);
  } else {
    element.classList.add(feature);
  }
}
