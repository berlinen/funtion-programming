const conditionally = config => props => {
  return config.if(props) ?
         config.then(props) : config.else(props)
}

export default conditionally