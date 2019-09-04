# DestinationRule

[[toc]]

## 简介

Destination Rule 定义的是流量经过路由后，访问服务的策略集。所配置的信息包括：

- 负载均衡策略
- 连接池配置
- 服务异常检测

## 基本配置

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: bookinfo-ratings
spec:
  host: ratings.prod.svc.cluster.local
  trafficPolicy:
    loadBalancer:
      simple: LEAST_CONN
  subsets:
  - name: testversion
    labels:
      version: v3
    trafficPolicy:
      loadBalancer:
        simple: ROUND_ROBIN
```

其中：

- `spec.host` 是 k8s 中的 Service 名称，可以使用全称例如 `ratings.prod.svc.cluster.local`，也可以使用缩写，例如 `ratings.prod`
- `spec.trafficPolicy` 配置了流量策略。包含负载均衡配置，连接池配置以及服务异常检测配置
- `spec.subsets` 配置了服务的一组子集，例如同一服务的不同版本。每个子集可以单独配置自己的流量策略

## Subset

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: bookinfo-ratings
spec:
  host: ratings.prod.svc.cluster.local
  trafficPolicy:
    loadBalancer:
      simple: LEAST_CONN
  subsets:
  - name: testversion
    labels:
      version: v3
    trafficPolicy:
      loadBalancer:
        simple: ROUND_ROBIN
```

Subset 定义了服务的一组子集。其中：

- `labels` 用于选择服务的实例（Pod）
- `trafficPolicy` 配置该 Subset 的流量策略

## Traffic Policy

### ConnectionPool

支持 `tcp` 和 `http` 配置。示例如下：

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: bookinfo-redis
spec:
  host: myredissrv.prod.svc.cluster.local
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
        connectTimeout: 30ms
        tcpKeepalive:
          time: 7200s
          interval: 75s
```

### LoadBalancer

负载均衡策略分为两类：`simple` 和 `consistentHash`。

#### simple

simple 的负载均衡策略配置如下：

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: bookinfo-ratings
spec:
  host: ratings.prod.svc.cluster.local
  trafficPolicy:
    loadBalancer:
      simple: ROUND_ROBIN
```

目前支持的负载均衡策略有 `ROUND_ROBIN`，`LEAST_CONN`，`RANDOM`，`PASSTHROUGH`。

#### consistentHash

一致性哈希支持基于 Header，Cookie 以及源 IP。例如基于 Cookie 的配置如下：

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: bookinfo-ratings
spec:
  host: ratings.prod.svc.cluster.local
  trafficPolicy:
    loadBalancer:
      consistentHash:
        httpCookie:
          name: user
          ttl: 0s
```

### OutlierDetection


## 参考

- [Destination Rule](https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule/)