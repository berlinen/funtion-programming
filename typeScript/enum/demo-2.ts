enum Responses {
  No = 0,
  Yes = 1,
}

const response = function(recipient: string, message: Responses): void {
  // ...
}

response('Long', Responses.Yes)