module.exports = {
  title: 'k8s note',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Notes',
      items: [
        { text: 'Kubernetes', link: '/k8s/' },
        { text: 'Istio', link: '/istio/' },
        { text: 'Ingress Nginx', link: '/ingress-nginx/' },
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
          'objects/ingress'
        ]
      }],
      '/istio/': [],
      '/ingress-nginx/': [
        'getting-started'
      ],
      '/prometheus/': []
    },
    sidebarDepth: 2
  }
}