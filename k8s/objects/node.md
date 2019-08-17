# Node

```bash
$ kubectl get node
NAME      STATUS   ROLES    AGE   VERSION
test-01   Ready    master   38d   v1.15.0
test-02   Ready    <none>   38d   v1.15.0
test-03   Ready    <none>   38d   v1.15.0

$ kubectl get node -owide
NAME            STATUS   ROLES    AGE   VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE           KERNEL-VERSION      CONTAINER-RUNTIME
devops-nh-02d   Ready    master   38d   v1.15.0   10.40.57.233   <none>        Ubuntu 16.04 LTS   4.15.0-39-generic   docker://18.6.1
devops-nh-03d   Ready    <none>   38d   v1.15.0   10.40.57.71    <none>        Ubuntu 16.04 LTS   4.15.0-39-generic   docker://18.6.1
devops-nh-04d   Ready    <none>   38d   v1.15.0   10.40.57.77    <none>        Ubuntu 16.04 LTS   4.15.0-39-generic   docker://18.6.1
```

```bash
$ kubectl get node devops-nh-02d -oyaml
apiVersion: v1
kind: Node
metadata:
  annotations:
    flannel.alpha.coreos.com/backend-data: '{"VtepMAC":"26:9c:90:a3:81:0e"}'
    flannel.alpha.coreos.com/backend-type: vxlan
    flannel.alpha.coreos.com/kube-subnet-manager: "true"
    flannel.alpha.coreos.com/public-ip: 10.40.57.233
    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock
    node.alpha.kubernetes.io/ttl: "0"
    volumes.kubernetes.io/controller-managed-attach-detach: "true"
  creationTimestamp: "2019-07-09T12:20:33Z"
  labels:
    beta.kubernetes.io/arch: amd64
    beta.kubernetes.io/os: linux
    kubernetes.io/arch: amd64
    kubernetes.io/hostname: devops-nh-02d
    kubernetes.io/os: linux
    node-role.kubernetes.io/master: ""
  name: devops-nh-02d
  resourceVersion: "4880125"
  selfLink: /api/v1/nodes/devops-nh-02d
  uid: 1bca978d-eb13-4499-9802-5d7699922333
spec:
  podCIDR: 10.244.0.0/24
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
```