# VirtualService

[[toc]]

## 简介

VirtualService 定义了流量的路由规则，控制请求如何路由到具体的服务上。

## 基本配置

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews-route
spec:
  hosts:
  - reviews.prod.svc.cluster.local
  http:
  - match:
    - uri:
        prefix: "/wpcatalog"
    - uri:
        prefix: "/consumercatalog"
    rewrite:
      uri: "/newcatalog"
    route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v2
  - route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v1
        port:
          number: 8080
```

其中：

- `spec.hosts` 定义了一组服务名称，可以是 DNS 解析的名称（支持通配符），也可以是 IP 地址。同时支持 HTTP 和 TCP 服务。
- `spec.http` 定义了一组 HTTP 路由，支持协议包括 HTTP/HTTP2/GRPC
- `spec.tls` 定义了一组 TLS 路由，支持协议包括 HTTPS/TLS
- `spec.tcp` 定义了一组 TCP 路由，支持非 HTTP 且非 TLS 的端口
- `spec.http[].route[].destination` 定义了真实服务的地址，可以配置：
  - `host`：服务地址
  - `subset`：服务的子集，在 DestinationRule 中定义
  - `port`：如果服务只暴露一个端口，可以不填；否则需要指定端口号

## HttpRoute

### match

定义路由的匹配规则，例如：

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings-route
spec:
  hosts:
  - ratings.prod.svc.cluster.local
  http:
  - match:
    - headers:
        end-user:
          exact: jason
      uri:
        prefix: "/ratings/v2/"
    - port: 8080
    route:
    - destination:
        host: ratings.prod.svc.cluster.local
```

每个 match 规则内的多个条件是 AND 的关系，多个 match 规则之前是 OR 的关系。例如上面的例子，在请求包含 `end-user: jason` 且路径是以 `/ratings/v2/` 开头的时候，或者访问的端口是 `8080` 的时候，会被匹配到。

目前支持的匹配条件有：

- `uri`
- `schema`
- `method`
- `authority`
- `headers`
- `port`
- `sourceLabels`
- `gateways`
- `queryParams`

其中对 `uri`，`schema`，`method`，`authority`，`headers` 以及 `queryParams` 的配置形式，支持一下三种：

- `exact: "value"`
- `prefix: "value"`
- `regex: "value"`

### route

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews-route
spec:
  hosts:
  - reviews.prod.svc.cluster.local
  http:
  - route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v2
      weight: 25
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v1
      weight: 75
```

不仅支持设置目标服务和权重，还支持设置对 request 和 response 的 HTTP Headers 进行修改（添加，删除，设置）。

### redirect

重定向服务

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings-route
spec:
  hosts:
  - ratings.prod.svc.cluster.local
  http:
  - match:
    - uri:
        exact: /v1/getProductRatings
    redirect:
      uri: /v1/bookRatings
      authority: newratings.default.svc.cluster.local
```

### rewrite

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings-route
spec:
  hosts:
  - ratings.prod.svc.cluster.local
  http:
  - match:
    - uri:
        prefix: /ratings
    rewrite:
      uri: /v1/bookRatings
    route:
    - destination:
        host: ratings.prod.svc.cluster.local
        subset: v1
```

### retries

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings-route
spec:
  hosts:
  - ratings.prod.svc.cluster.local
  http:
  - route:
    - destination:
        host: ratings.prod.svc.cluster.local
        subset: v1
    retries:
      attempts: 3
      perTryTimeout: 2s
      retryOn: gateway-error,connect-failure,refused-stream
```

### 错误注入

#### Abort

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings-route
spec:
  hosts:
  - ratings.prod.svc.cluster.local
  http:
  - route:
    - destination:
        host: ratings.prod.svc.cluster.local
        subset: v1
    fault:
      abort:
        percentage:
          value: 0.1
        httpStatus: 400
```

#### Delay

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews-route
spec:
  hosts:
  - reviews.prod.svc.cluster.local
  http:
  - match:
    - sourceLabels:
        env: prod
    route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v1
    fault:
      delay:
        percentage:
          value: 0.1
        fixedDelay: 5s
```

### CORS

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings-route
spec:
  hosts:
  - ratings.prod.svc.cluster.local
  http:
  - route:
    - destination:
        host: ratings.prod.svc.cluster.local
        subset: v1
    corsPolicy:
      allowOrigin:
      - example.com
      allowMethods:
      - POST
      - GET
      allowCredentials: false
      allowHeaders:
      - X-Foo-Bar
      maxAge: "24h"
```

### 其它

- `timeout`
- `mirror`
- `headers`：修改 request 和 response 的 Headers（添加，删除，设置）

## 参考

- [Virtual Service](https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/)