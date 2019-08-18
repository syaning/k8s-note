# Deployment

[[toc]]

## 创建 Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.16
        ports:
        - containerPort: 80
```

Deployment 会自动创建 ReplicaSet：

```bash
$ kubectl get deploy
NAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
nginx     3         3         3            3           4s

$ kubectl get rs
NAME               DESIRED   CURRENT   READY     AGE
nginx-65fc954674   3         3         3         12s

$ kubectl get po
NAME                     READY     STATUS    RESTARTS   AGE
nginx-65fc954674-2tc4v   1/1       Running   0          15s
nginx-65fc954674-fmqpf   1/1       Running   0          15s
nginx-65fc954674-ssz7x   1/1       Running   0          15s
```

## 扩容

### 手动扩容

```bash
$ kubectl scale --replicas=5 deploy/nginx
```

### 自动扩容

参考 [HorizontalPodAutoscaler](./horizontal-pod-autoscaler.md)。

## 滚动升级