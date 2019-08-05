# k8s-note


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
