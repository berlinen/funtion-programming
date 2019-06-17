var Responses;
(function (Responses) {
    Responses[Responses["No"] = 0] = "No";
    Responses[Responses["Yes"] = 1] = "Yes";
})(Responses || (Responses = {}));
var response = function (recipient, message) {
    // ...
};
response('Long', Responses.Yes);
