(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{405:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"destinationrule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destinationrule"}},[t._v("#")]),t._v(" DestinationRule")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#简介"}},[t._v("简介")])]),s("li",[s("a",{attrs:{href:"#基本配置"}},[t._v("基本配置")])]),s("li",[s("a",{attrs:{href:"#subset"}},[t._v("Subset")])]),s("li",[s("a",{attrs:{href:"#traffic-policy"}},[t._v("Traffic Policy")]),s("ul",[s("li",[s("a",{attrs:{href:"#connectionpool"}},[t._v("ConnectionPool")])]),s("li",[s("a",{attrs:{href:"#loadbalancer"}},[t._v("LoadBalancer")])]),s("li",[s("a",{attrs:{href:"#outlierdetection"}},[t._v("OutlierDetection")])]),s("li",[s("a",{attrs:{href:"#根据端口设置"}},[t._v("根据端口设置")])])])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("Destination Rule 定义的是流量经过路由后，访问服务的策略集。所配置的信息包括：")]),t._v(" "),s("ul",[s("li",[t._v("负载均衡策略")]),t._v(" "),s("li",[t._v("连接池配置")]),t._v(" "),s("li",[t._v("服务异常检测")])]),t._v(" "),s("h2",{attrs:{id:"基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DestinationRule\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bookinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ratings\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ratings.prod.svc.cluster.local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LEAST_CONN\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" testversion\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v3\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ROUND_ROBIN\n")])])]),s("p",[t._v("其中：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("spec.host")]),t._v(" 是 k8s 中的 Service 名称，可以使用全称例如 "),s("code",[t._v("ratings.prod.svc.cluster.local")]),t._v("，也可以使用缩写，例如 "),s("code",[t._v("ratings.prod")])]),t._v(" "),s("li",[s("code",[t._v("spec.trafficPolicy")]),t._v(" 配置了流量策略。包含负载均衡配置，连接池配置以及服务异常检测配置")]),t._v(" "),s("li",[s("code",[t._v("spec.subsets")]),t._v(" 配置了服务的一组子集，例如同一服务的不同版本。每个子集可以单独配置自己的流量策略")])]),t._v(" "),s("h2",{attrs:{id:"subset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subset"}},[t._v("#")]),t._v(" Subset")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DestinationRule\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bookinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ratings\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ratings.prod.svc.cluster.local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LEAST_CONN\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" testversion\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v3\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ROUND_ROBIN\n")])])]),s("p",[t._v("Subset 定义了服务的一组子集。其中：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("labels")]),t._v(" 用于选择服务的实例（Pod）")]),t._v(" "),s("li",[s("code",[t._v("trafficPolicy")]),t._v(" 配置该 Subset 的流量策略")])]),t._v(" "),s("h2",{attrs:{id:"traffic-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traffic-policy"}},[t._v("#")]),t._v(" Traffic Policy")]),t._v(" "),s("h3",{attrs:{id:"connectionpool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connectionpool"}},[t._v("#")]),t._v(" ConnectionPool")]),t._v(" "),s("p",[t._v("支持 "),s("code",[t._v("tcp")]),t._v(" 和 "),s("code",[t._v("http")]),t._v(" 配置。示例如下：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DestinationRule\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bookinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("redis\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myredissrv.prod.svc.cluster.local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connectionPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tcp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxConnections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connectTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30ms\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tcpKeepalive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 7200s\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 75s\n")])])]),s("h3",{attrs:{id:"loadbalancer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loadbalancer"}},[t._v("#")]),t._v(" LoadBalancer")]),t._v(" "),s("p",[t._v("负载均衡策略分为两类："),s("code",[t._v("simple")]),t._v(" 和 "),s("code",[t._v("consistentHash")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"simple"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple"}},[t._v("#")]),t._v(" simple")]),t._v(" "),s("p",[t._v("simple 的负载均衡策略配置如下：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DestinationRule\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bookinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ratings\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ratings.prod.svc.cluster.local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ROUND_ROBIN\n")])])]),s("p",[t._v("目前支持的负载均衡策略有 "),s("code",[t._v("ROUND_ROBIN")]),t._v("，"),s("code",[t._v("LEAST_CONN")]),t._v("，"),s("code",[t._v("RANDOM")]),t._v("，"),s("code",[t._v("PASSTHROUGH")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"consistenthash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistenthash"}},[t._v("#")]),t._v(" consistentHash")]),t._v(" "),s("p",[t._v("一致性哈希支持基于 Header，Cookie 以及源 IP。例如基于 Cookie 的配置如下：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DestinationRule\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bookinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ratings\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ratings.prod.svc.cluster.local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consistentHash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpCookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ttl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0s\n")])])]),s("h3",{attrs:{id:"outlierdetection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outlierdetection"}},[t._v("#")]),t._v(" OutlierDetection")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DestinationRule\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("policy\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews.prod.svc.cluster.local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connectionPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tcp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxConnections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http2MaxRequests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxRequestsPerConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("outlierDetection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consecutiveErrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5m\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseEjectionTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15m\n")])])]),s("h3",{attrs:{id:"根据端口设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据端口设置"}},[t._v("#")]),t._v(" 根据端口设置")]),t._v(" "),s("p",[t._v("可以针对不同的端口，设置不同的流量策略。例如：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DestinationRule\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bookinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ratings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("port\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ratings.prod.svc.cluster.local\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trafficPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Apply to all ports")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("portLevelSettings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LEAST_CONN\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9080")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loadBalancer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ROUND_ROBIN\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Destination Rule"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);