# Install

- [Installing on Kubernetes](https://istio.io/docs/setup/kubernetes/)
- [Customizable Install with Helm](https://istio.io/docs/setup/kubernetes/install/helm/)

```bash
$ curl -L https://git.io/getLatestIstio | ISTIO_VERSION=1.2.5 sh -
$ cp bin/istioctl /usr/local/bin

$ helm install install/kubernetes/helm/istio-init --name istio-init --namespace istio-system
$ kubectl get crds | grep 'istio.io\|certmanager.k8s.io' | wc -l

$ helm install install/kubernetes/helm/istio --name istio --namespace istio-system
```