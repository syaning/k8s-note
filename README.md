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
- schedule pod to node: nodeName, nodeSelector, affinity

---

### Object

- api group
- api version
- kind
- name
- namespace
- labels
- annotations

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

### Service

- service type
- port
- endpoint
- headless service

### Deployment

### StatefulSet

### ServiceAccount
