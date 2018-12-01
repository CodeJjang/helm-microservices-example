# Helm Microservices Example
This repo serves as an example regarding how to create DRY Helm charts to multiple micro-services along with an Umbrella chart.  
For further reading about the underlying details, please refer to the [Medium post]().

## Requirements
Make sure your `kubectl` is configured to talk to some K8S cluster, and your `helm` client is initialized.

## Installation
Since the Umbrella chart installs its' subcharts, which in turn depend on the Common chart, a recursive dependency update strategy was required. A simple `helm dep up` command wouldn't do the job here. Hence, run the following script:
```
./helm-dep-up-umbrella.sh helm-chart
```

Next, simply install the Umbrella chart:
```
helm install helm-chart
```

### Configuration
There are several ways to override specific subcharts values, all detailed in the aforementioned Medium post.  
However, each subchart should contain it's own config inside the chart path (i.e. the `.env` file).
