module.exports = {
  base: '/k8s-note/',
  title: 'Cloud Native Notes',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Notes',
      items: [
        { text: 'Kubernetes', link: '/k8s/' },
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
      '/k8s/': [{
        title: '资源对象',
        children: [
          'objects/node',
          'objects/namespace',
          'objects/pod',
          'objects/replica-set',
          'objects/deployment',
          'objects/stateful-set',
          'objects/daemon-set',
          'objects/horizontal-pod-autoscaler',
          'objects/service',
          'objects/endpoints',
          'objects/configmap',
          'objects/secret',
          'objects/service-account',
          'objects/role',
          'objects/cluster-role',
          'objects/role-binding',
          'objects/cluster-role-binding',
          'objects/ingress'
        ]
      }, {
        title: 'Guides',
        children: [
          'guides/rbac'
        ]
      }, {
        title: '工具',
        children: [
          'tools/kubectl'
        ]
      }],
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