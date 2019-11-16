# ConfigMap

通过 ConfigMap 可以为 Ingress Nginx 做全局配置。在启动的时候，会通过 `--configmap` 指定所用的 ConfigMap，通过如下方式可以查看：

```bash
$ kubectl describe deploy -n ingress nginx-nginx-ingress-controller

Name:                   nginx-nginx-ingress-controller
Namespace:              ingress
Pod Template:
  Containers:
   nginx-ingress-controller:
    Image:       quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.24.1
    Ports:       80/TCP, 443/TCP
    Host Ports:  0/TCP, 0/TCP
    Args:
      /nginx-ingress-controller
      --default-backend-service=ingress/nginx-nginx-ingress-default-backend
      --election-id=ingress-controller-leader
      --ingress-class=nginx
      --configmap=ingress/nginx-nginx-ingress-controller
... ...
```

因此可以配置如下 ConfigMap:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ingress-nginx-ingress-controller
  namespace: ingress
data:
  map-hash-bucket-size: "128"
  ssl-protocols: SSLv2
```

::: warning
需要特别注意的是，ConfigMap 中 key 和 value 都是字符串，因此对于数字、`true`、`false`，都需要用引号引起来。
:::

完整的配置列表可以参考 [ConfigMaps](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/).