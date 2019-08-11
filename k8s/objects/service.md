# Service

[[toc]]

## 类型

- ClusterIP：默认类型，会分配一个集群内可访问的虚拟 IP
- NodePort：会暴露一个端口出去，通过 `<NodeIP>:<NodePort>` 可以访问
- LoadBalancer：使用云服务提供商的负载均衡器对外提供服务
- ExternalName：转发到外部的其它服务上

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

### Headless Service

### NodePort

### LoadBalancer

### ExternalName

## Port

## DNS