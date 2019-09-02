# Example

- [Bookinfo Application](https://istio.io/docs/examples/bookinfo/)

```bash
$ kubectl label namespace default istio-injection=enabled
$ kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
$ kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml

$ export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
$ export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}')
$ export INGRESS_HOST=$(kubectl get po -l istio=ingressgateway -n istio-system -o jsonpath='{.items[0].status.hostIP}')
$ export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT

$ curl -s http://${GATEWAY_URL}/productpage

$ kubectl apply -f samples/bookinfo/networking/destination-rule-all.yaml
```