# GKE Cluster

Terraform configuration files to provision an GKE cluster on GCP.

This repo also creates a VPC and subnet for the GKE cluster. This is not required but highly recommended to keep your GKE cluster isolated.

## Pre-requisites

```sh
gcloud components install gke-gcloud-auth-plugin
```

## Use

```sh
terraform apply

# once provisioned
gcloud container clusters get-credentials $(terraform output -raw kubernetes_cluster_name) --region $(terraform output -raw region)
```