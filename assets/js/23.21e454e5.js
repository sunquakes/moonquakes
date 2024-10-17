(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{304:function(s,t,n){"use strict";n.r(t);var a=n(14),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[s._v("#")]),s._v(" Introduction")]),s._v(" "),t("p",[s._v("Moonquakes is a micro-service solution. It composed three parts now. A golang component, a maven repository and a php\nframework.")]),s._v(" "),t("p",[s._v("Every component composed a server and a client, and use JSON-RPC communicate each other, the server can use tcp or http\nprotocol.")]),s._v(" "),t("p",[s._v("The requests and responses, sent between client and server.")]),s._v(" "),t("p",[s._v("The request body looks like:")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1604283212"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jsonrpc"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IntRpc/Add"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"b"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("The response body looks like:")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1604283212"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jsonrpc"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("More JSON-RPC detail: "),t("a",{attrs:{href:"https://www.jsonrpc.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("JSON-RPC"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"why-json-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-json-rpc"}},[s._v("#")]),s._v(" Why JSON-RPC")]),s._v(" "),t("ul",[t("li",[s._v("It is simple and lightweight(but powerful)")]),s._v(" "),t("li",[s._v("It is easy to debug and mock")]),s._v(" "),t("li",[s._v("It add only small overhead")])]),s._v(" "),t("h2",{attrs:{id:"get-the-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-the-demo"}},[s._v("#")]),s._v(" Get The Demo")]),s._v(" "),t("p",[s._v("The demo code include three branch: main and consul and nacos. The branch main show how to use node ip to\nintercommunicate directly in three difference language project. The branch consul and nacos show how to use registration\nand discovery to intercommunicate in three difference language project.")]),s._v(" "),t("h3",{attrs:{id:"ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[s._v("#")]),s._v(" IP")]),s._v(" "),t("ul",[t("li",[s._v("Use ip.")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Clone code.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:sunquakes/moonquakes.git\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" moonquakes\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Switch to branch main.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch main\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build image.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run docker container.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up\n")])])]),t("h3",{attrs:{id:"registration-discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registration-discovery"}},[s._v("#")]),s._v(" Registration & Discovery")]),s._v(" "),t("ul",[t("li",[s._v("Use consul.")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Clone code.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:sunquakes/moonquakes.git\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" moonquakes\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Switch to branch consul.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch consul\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build image.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run docker container.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up\n")])])]),t("ul",[t("li",[s._v("Use nacos.")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Clone code.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:sunquakes/moonquakes.git\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" moonquakes\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Switch to branch nacos.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch nacos\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build image.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run docker container.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);