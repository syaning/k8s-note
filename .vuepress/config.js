const k8sSidebar = {
  '/k8s/objects/': [{
    title: 'Objects',
    collapsable: false,
    children: [
      'pod',
      'horizontal-pod-autoscaler'
    ]
  }, {
    title: '集群信息',
    collapsable: false,
    children: [
      'node',
      'namespace',
      'component-status',
      'event'
    ]
  }, {
    title: 'Controller',
    collapsable: false,
    children: [
      'replica-set',
      'deployment',
      'stateful-set',
      'daemon-set'
    ]
  }, {
    title: '配置',
    collapsable: false,
    children: [
      'configmap',
      'secret',
      'service-account'
    ]
  }, {
    title: 'Service',
    collapsable: false,
    children: [
      'service',
      'endpoints',
      'ingress'
    ]
  }, {
    title: 'Storage',
    collapsable: false,
    children: [
      'persistent-volume',
      'persistent-volume-claim',
      'storage-class'
    ]
  }, {
    title: 'RBAC',
    collapsable: false,
    children: [
      'role',
      'cluster-role',
      'role-binding',
      'cluster-role-binding'
    ]
  }],
  '/k8s/guides/': [{
    title: 'Guides',
    collapsable: false,
    children: [
      'rbac',
      'gpu'
    ]
  }],
  '/k8s/tools/': [
    'kubectl'
  ]
}

const istioSidebar = {
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
}

module.exports = {
  base: '/k8s-note/',
  title: 'K8s Notes',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Kubernetes',
      items: [
        { text: '资源对象', link: '/k8s/objects/' },
        { text: 'Guides', link: '/k8s/guides/' },
        { text: 'Tools', link: '/k8s/tools/' }
      ]
    }, {
      text: 'Notes',
      items: [
        { text: 'Ingress Nginx', link: '/ingress-nginx/' },
        { text: 'Envoy', link: '/envoy/' },
        { text: 'Istio', link: '/istio/' },
        { text: 'Prometheus', link: '/prometheus/' }
      ]
    }, {
      text: 'Github',
      link: 'https://github.com/syaning/k8s-note'
    }],
    sidebar: {
      ...k8sSidebar,
      ...istioSidebar,
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
    sidebarDepth: 2
  }
}