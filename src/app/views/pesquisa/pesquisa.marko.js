// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ahgora-teste$1.0.0/src/app/views/pesquisa/pesquisa.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><script src=\"https://apis.google.com/js/api.js\"></script><script>\r\n         function loadClient() {\r\n            gapi.client.setApiKey(\"AIzaSyC7Miok7FO3Mzzxh5en4OFwFKCHff2xNfA\");\r\n            return gapi.client.load(\"https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest\")\r\n                .then(function() { console.log(\"GAPI client loaded for API\"); },\r\n                    function(err) { console.error(\"Error loading GAPI client for API\", err); });\r\n        }\r\n        // Make sure the client is loaded before calling this method.\r\n        function execute() {\r\n            return gapi.client.youtube.search.list({\r\n            \"part\": \"snippet\",\r\n            \"maxResults\": 50,\r\n            \"q\": \"Alanzoka\"\r\n            })\r\n                .then(function(response) {\r\n                        // Handle the results here (response.result has the parsed body).\r\n                        console.log(\"Response\", response);\r\n                    },\r\n                    function(err) { console.error(\"Execute error\", err); });\r\n        }\r\n        gapi.load(\"client\");\r\n    </script></head><body>");

  component_globals_tag({}, out);

  out.w("<button onclick=\"loadClient()\">load</button><button onclick=\"execute()\">execute</button>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "7");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ahgora-teste$1.0.0/src/app/views/pesquisa/pesquisa.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
