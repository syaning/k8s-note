(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{399:function(t,s,e){"use strict";e.r(s);var n=e(42),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://istio.io/docs/setup/kubernetes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installing on Kubernetes"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://istio.io/docs/setup/kubernetes/install/helm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Customizable Install with Helm"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://git.io/getLatestIstio "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ISTIO_VERSION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".5 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" bin/istioctl /usr/local/bin\n\n$ helm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" install/kubernetes/helm/istio-init --name istio-init --namespace istio-system\n$ kubectl get crds "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'istio.io\\|certmanager.k8s.io'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n\n$ helm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" install/kubernetes/helm/istio --name istio --namespace istio-system\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);