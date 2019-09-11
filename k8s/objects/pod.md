# Pod

[[toc]]

## 简介

- Pod 是 k8s 中最小的执行单元，是对容器的一层包装，每个 Pod 内可以有一个或多个容器
- Pod 内的容器共享网络和存储，互相之间可以通过 `localhost` 来进行通信
- Pod是非持久的、一次性的 (ephemeral, disposable)
- Pod 不会自愈，当一个 Pod 失败后，会被删除
- Controller（例如 Deployment，StatefulSet，DaemonSet）用于管理 Pod，对 Pod 进行调度，复本管理，滚动升级等
- 很少直接使用 Pod，一般都是通过 Controller 来使用
- Pod template 也通常不直接使用，而是放在 Controller template 里

## 生命周期

### Status

- `Pending`：尚未调度，镜像在下载中，或者找不到合适的调度节点
- `Running`：被调度到一个节点上，其中至少一个容器还在运行中，启动中或者重启中
- `Succeeded`：所有容器运行成功然后终止，且不会重启
- `Failed`：所有容器已经终止运行，且至少有一个容器失败而终止
- `Unknow`：状态未知

```bash
$ kubectl describe po nginx-66f9f9cfd5-2w97n
Name:               nginx-66f9f9cfd5-2w97n
Namespace:          default
Labels:             app=nginx
                    pod-template-hash=66f9f9cfd5
Status:             Running

$ kubectl get po nginx-66f9f9cfd5-2w97n -oyaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-66f9f9cfd5-2w97n
  namespace: default
status:
  phase: Running
```

### Conditions

每个 Pod 有一组 Condition，表示 Pod 在各个阶段的状态。每个 Condition 包含：

- `lastProbeTime`
- `lastTransitionTime`
- `message`
- `reason`
- `status`：可取值为 `True`，`False` 和 `Unknown`
- `type`
  - `PodScheduled`：Pod 被调度到 Node 上
  - `Ready`：Pod 已经可以接受请求，并且应当加入到 Service 的负载均衡池中
  - `Initialized`：所有的 Init Container 都起来了
  - `Unschedulable`：暂时无法调度，可能是由于没有满足条件的 Node
  - `ContainersReady`：所有的容器都 ready

```bash
$ kubectl describe po nginx-66f9f9cfd5-2w97n
Name:               nginx-66f9f9cfd5-2w97n
Namespace:          default
Labels:             app=nginx
                    pod-template-hash=66f9f9cfd5
Status:             Running
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True

$ kubectl get po nginx-66f9f9cfd5-2w97n -oyaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-66f9f9cfd5-2w97n
  namespace: default
status:
  conditions:
  - lastProbeTime: null
    lastTransitionTime: "2019-09-03T16:50:59Z"
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: "2019-09-09T11:45:47Z"
    status: "True"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: "2019-09-09T11:45:47Z"
    status: "True"
    type: ContainersReady
  - lastProbeTime: null
    lastTransitionTime: "2019-09-03T16:48:33Z"
    status: "True"
    type: PodScheduled
  phase: Running
```

### Probe

### Init Container

### Restart Policy

## 调度

- nodeName
- nodeSelector
- affinity

## 参考

- [Pod Overview](https://kubernetes.io/docs/concepts/workloads/pods/)
- [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod/)
- [Pod Lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/)