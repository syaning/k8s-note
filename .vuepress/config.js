module.exports = {
  base: process.env.BASEURL || '/',
  title: 'K8s Notes',
  themeConfig: {
    logo: '/logo.svg',
    nav: [{
      text: 'Notes',
      items: [
        { text: 'Kubernetes', link: '/k8s/' },
        { text: 'Ingress Nginx', link: '/ingress-nginx/' },
        { text: 'Envoy', link: '/envoy/' },
        { text: 'Istio', link: '/istio/' },
        { text: 'Prometheus', link: '/prometheus/' }
      ]
    }],
    sidebar: {
      '/k8s/': [{
        title: '资源对象',
        children: [
          'objects/',
          'objects/pod',
          'objects/horizontal-pod-autoscaler',
          'objects/node',
          'objects/namespace',
          'objects/component-status',
          'objects/event',
          'objects/replica-set',
          'objects/deployment',
          'objects/stateful-set',
          'objects/daemon-set',
          'objects/configmap',
          'objects/secret',
          'objects/service-account',
          'objects/service',
          'objects/endpoints',
          'objects/ingress',
          'objects/persistent-volume',
          'objects/persistent-volume-claim',
          'objects/storage-class',
          'objects/job',
          'objects/cronjob',
          'objects/role',
          'objects/cluster-role',
          'objects/role-binding',
          'objects/cluster-role-binding',
          'objects/resource-quota',
          'objects/pod-disruption-budget'
        ]
      }, {
        title: 'Guides',
        children: [
          'guides/components',
          'guides/api',
          'guides/pod-schedule',
          'guides/rbac',
          'guides/gpu'
        ]
      }, {
        title: 'Tools',
        children: [
          'tools/kubectl'
        ]
      }],
      '/istio/': [{
        title: 'Guides',
        collapsable: false,
        children: [
          'guides/service-mesh'
        ]
      }, {
        title: 'Setup',
        collapsable: false,
        children: [
          'setup/install',
          'setup/example'
        ]
      }, {
        title: 'CRDs',
        collapsable: false,
        children: [
          'crds/destination-rule',
          'crds/virtual-service',
          'crds/gateway',
          'crds/service-entry'
        ]
      }],
      '/ingress-nginx/': [{
        title: 'Ingress Nginx',
        collapsable: false,
        children: [
          'getting-started',
          'configmap',
          'annotations'
        ]
      }],
      '/envoy/': [],
      '/prometheus/': []
    },
    sidebarDepth: 1,
    lastUpdated: true,
    repo: 'syaning/k8s-note',
    editLinks: true
  }
}