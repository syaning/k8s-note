# kubectl

kubectl 是一个命令行工具，基本用法为：

```bash
kubectl [command] [TYPE] [NAME] [flags]
```

例如：

```bash
kubectl get po -A
kubectl describe svc nginx -oyaml
```

## 参考

- [Overview of kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)