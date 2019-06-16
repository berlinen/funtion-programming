const tryCatch = function({
  tryer,
  catcher
}) {
  return props => {
    try {
      return tryer(props);
    } catch(e) {
      return catcher(props, e.message);
    }
  }
}