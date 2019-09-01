# Getting Started

[[toc]]

## 安装

```bash
$ helm install stable/nginx-ingress --name nginx --namespace ingress-nginx
```

更多参考 [Installation Guide](https://kubernetes.github.io/ingress-nginx/deploy/)

## 基本使用

先部署一个 httpbin 服务：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: httpbin
spec:
  replicas: 3
  selector:
    matchLabels:
      app: httpbin
  template:
    metadata:
      labels:
        app: httpbin
    spec:
      containers:
      - name: httpbin
        image: kennethreitz/httpbin
        ports:
        - containerPort: 80

---

apiVersion: v1
kind: Service
metadata:
  name: httpbin
spec:
  selector:
    app: httpbin
  type: NodePort
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
```

配置 Ingress：

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: nginx
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
spec:
  rules:
  - http:
      paths:
      - path: /
        backend:
          serviceName: httpbin
          servicePort: 80
```