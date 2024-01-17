# GKE Cluster

Terraform configuration files to provision an GKE cluster on GCP.

This repo also creates a VPC and subnet for the GKE cluster. This is not required but highly recommended to keep your GKE cluster isolated.

## Pre-requisites

```sh
gcloud components install gke-gcloud-auth-plugin

# verify it
gke-gcloud-auth-plugin --version

# open a new terminal session and verify it again
gke-gcloud-auth-plugin --version

# add PATH if the installation did not work
brew info google-cloud-sdk
```

## Use

```sh
terraform apply

# once provisioned
gcloud container clusters get-credentials $(terraform output -raw kubernetes_cluster_name) --region $(terraform output -raw region)
```