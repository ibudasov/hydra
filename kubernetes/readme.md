## Preconditions

1. Ingress controller — Check if you have it: `kubectl get pods`

2. Install Ingress Controller if you do not have it: https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac or: 

```sh
helm upgrade --install ingress-nginx ingress-nginx \
   --repo https://kubernetes.github.io/ingress-nginx 
```
3. Make sure you have installed the Ingress controller in the same namespace as your application

4. Install Prometheus
```sh
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install prometheus prometheus-community/kube-prometheus-stack
helm upgrade --install -f values-prometheus.yaml prometheus prometheus-community/kube-prometheus-stack
```

## Install

```sh

kubectl create secret generic redis-secret --from-literal=connection-url='redis://localhost:6379'

# install upon configured cluster
helm install hydra .

# get the IP of ingress 
kubectl get ingress

# and try to reach it
curl "http://192.168.0.1/"
```

## Todo

- consider setup in a separate namespace out of the box. Might be a DX improvement
