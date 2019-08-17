# k8s-note

TOOLS

- kubectl usage
- kustomize
- Enovy (Sidecar)
- Istio

MISC

- iptables
- ipvs

OVERALL

- k8s architecture
- api-server
- etc.

NOTES

- pod
- controller
- service
  - port, targetPort, named port
  - portocol: TCP, UDP, HTTP
  - endpoints
  - externalName
  - iptables / ipvs mode
  - headerless service
  - service types
- DNS


QA

- 集群外流量进入集群的方式：nodeport, loadbalancer, ingress, kubectl proxy, external ips
- schedule pod to node: nodeName, nodeSelector, affinity, taint & toleration

Kubectl

- -owide
- -w
- -ojsonpath

---

### Object

- api group
- api version
- kind
- name
- namespace
- labels
- annotations
- taint
- tolerate

### Pod

- image: repository, tag, imagePullPolicy
- container: command, args
- resource limit, resource request: CPU, Memory
- volume: pvc, projected
- securityContext
- probe: liveness, readiness
- nodeSelector
- initContainer
- hooks: postStart, preStop
- share process namespace

### Deployment

### StatefulSet

### ServiceAccount
