# Service

[[toc]]

## 类型

- ClusterIP：默认类型，会分配一个集群内可访问的虚拟 IP
- NodePort：会暴露一个端口出去，通过 `<NodeIP>:<NodePort>` 可以访问
- LoadBalancer：使用云服务商提供的负载均衡器对外提供服务
- ExternalName：转发到其它服务上

## 创建 Service

### ClusterIP

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  type: ClusterIP
  selector:
    app: nginx
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
```

其中 `port` 是 Service 对外暴露的端口，`targetPort` 是目标 Pod 的端口。在不声明的情况下，`targetPort` 默认和 `port` 保持一致。

### NodePort

`NodePort` 类型的 Service 可以使用 `<NodeIP>:<NodePort>` 来访问，例如：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
    nodePort: 32080
```

如果不指定 `nodePort`，系统会默认分配一个端口。默认的端口范围是 `30000-32767`。

更多详情参考 [Type NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport)。

### LoadBalancer

通过云服务商提供的负载均衡器对外暴露服务。

更多详情参考 [Type LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer)。

### ExternalName

`ExternalName` 类型的 Service 可以在 DNS 解析阶段，将服务地址解析成另一个外部服务的地址，从而进行访问。例如：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: httpbin
spec:
  type: ExternalName
  externalName: httpbin.org
```

更多详情参考 [Type ExternalName](https://kubernetes.io/docs/concepts/services-networking/service/#externalname)。

## Headless Service

## 多端口

一个 Service 可以对外暴露多个端口，此时应当为每个端口指定一个 `name`：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 9376
  - name: https
    protocol: TCP
    port: 443
    targetPort: 9377
```

## 服务发现

### 环境变量

### DNS