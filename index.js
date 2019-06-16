const conditionlly = config => props => {
  return config.if(props) ?
         config.then(props) : config.else(props)
}