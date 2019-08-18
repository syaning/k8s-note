module.exports = {
  title: 'k8s note',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kubernetes', link: '/k8s/' },
      { text: 'Istio', link: '/istio/' },
      { text: 'Github', link: 'https://github.com/syaning/k8s-note' }
    ],
    sidebar: {
      '/k8s/': [{
        title: '资源对象',
        children: [
          'objects/node',
          'objects/namespace',
          'objects/pod',
          'objects/replica-set',
          'objects/deployment',
          'objects/horizontal-pod-autoscaler',
          'objects/service',
          'objects/endpoints',
          'objects/configmap',
          'objects/secret',
          'objects/service-account',
          'objects/ingress'
        ]
      }],
      '/istio/': []
    },
    sidebarDepth: 2
  }
}