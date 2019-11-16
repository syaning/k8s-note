# Annotations

可以为 Ingress 对象添加特定的 annotations 来进行配置。例如：

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: nginx
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
    nginx.ingress.kubernetes.io/proxy-body-size: "5m"
spec:
  rules:
  - http:
      paths:
      - path: /
        backend:
          serviceName: sample-service
          servicePort: 80
```

::: warning
需要注意：

- annotation 的 value 必须为字符串，因此对于数字、`true`、`false`，都需要用引号引起来
- annotation 的 key 默认前缀为 `nginx.ingress.kubernetes.io`，可以通过 ingress nginx controller 的启动参数 `--annotations-prefix` 进行修改
:::

完整的配置列表可以参考 [Annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/).