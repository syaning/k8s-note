# Service Mesh

[[toc]]

## 大纲

1. 架构发展
    - 解决了什么问题
    - 优势（非侵入，支持各种语言），不足
2. 什么是service mesh
3. Istio 架构
4. Istio 核心概念
5. 示例

其它：

- 什么是云原生
- https://www.infoq.cn/article/fA42rfjV*dYGAvRANFqE
- https://jimmysong.io/posts/what-is-cloud-native-application-architecture/

## 参考

- [What's a service mesh? And why do I need one?](https://buoyant.io/2017/04/25/whats-a-service-mesh-and-why-do-i-need-one/)
- [Pattern: Service Mesh](https://philcalcado.com/2017/08/03/pattern_service_mesh.html)
- [一文详解微服务架构](https://www.cnblogs.com/skabyy/p/11396571.html)
- 公众号“架构师之路”
  - [ServiceMesh究竟解决什么问题？](https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=2651962194&idx=2&sn=7a2d8305181a394e1d01e885286a7dde&chksm=bd2d0e8e8a5a8798c17b6dcbbd0fb87ed519b685856bc480437b9ca03a665e5536d03264d91b&scene=21#wechat_redirect)
  - [Istio究竟是干嘛的？](https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=2651962209&idx=1&sn=5a7c979833347b58353e5636f616f411&chksm=bd2d0ebd8a5a87ab9484f1cbb8960a926fdd57506f77b53dacb4bf9b79c0ac29b117c7d1bc49&scene=21#wechat_redirect)
  - [Istio分层架构？80%的人有误解](https://mp.weixin.qq.com/s/1xoZounMG-azUqP564oppA)

## 服务化存在的问题

- 业务代码和框架耦合严重

## 什么是Service Mesh

- 是一个处理服务间通信的基础设施层
- 应用程序无感知，类比于 TCP/IP 协议
- 将服务发现，监控，超时/重试，tracing 等功能与业务代码解耦