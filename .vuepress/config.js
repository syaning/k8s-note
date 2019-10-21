const k8sSidebar = {
  '/k8s/objects/': [{
    title: 'Objects',
    children: [
      'pod',
      'horizontal-pod-autoscaler'
    ]
  }, {
    title: '集群信息',
    children: [
      'node',
      'namespace',
      'component-status',
      'event'
    ]
  }, {
    title: 'Controller',
    children: [
      'replica-set',
      'deployment',
      'stateful-set',
      'daemon-set'
    ]
  }, {
    title: '配置',
    children: [
      'configmap',
      'secret',
      'service-account'
    ]
  }, {
    title: 'Service',
    children: [
      'service',
      'endpoints',
      'ingress'
    ]
  }, {
    title: 'Storage',
    children: [
      'persistent-volume'
    ]
  }, {
    title: 'RBAC',
    children: [
      'role',
      'cluster-role',
      'role-binding',
      'cluster-role-binding'
    ]
  }],
  '/k8s/guides/': [
    'rbac'
  ],
  '/k8s/tools/': [
    'kubectl'
  ]
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

      '/ingress-nginx/': [
        'getting-started'
      ],
      '/envoy/': [],
      '/istio/': [{
        title: 'Setup',
        children: [
          'setup/install',
          'setup/example'
        ]
      }, {
        title: 'CRDs',
        children: [
          'crds/destination-rule',
          'crds/virtual-service',
          'crds/service-entry'
        ]
      }],
      '/prometheus/': []
    },
    sidebarDepth: 2
  }
}