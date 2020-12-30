<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      connection: {
        host: "192.168.10.65",
        port: 9001,
        endpoint: "/",
        options: {
          clean: true, // 保留会话
          connectTimeout: 4000, // 超时时间
          reconnectPeriod: 4000, // 重连时间间隔
          // 认证信息
          clientId: "41215676e5cf4e638a3fae8c5cf38024",
          username: "admin",
          password: "123456"
        }
      },
      receiveNews:[]
    };
  },
  mounted() {
    //this.createConnection();
  },
  methods: {
    createConnection() {
      // 连接字符串, 通过协议指定使用的连接方式
      // ws 未加密 WebSocket 连接
      // wss 加密 WebSocket 连接
      // mqtt 未加密 TCP 连接
      // mqtts 加密 TCP 连接
      // wxs 微信小程序连接
      // alis 支付宝小程序连接
      const { host, port, options } = this.connection;
      const connectUrl = `ws://${host}:${port}`;
      try {
        this.client = this.$mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        console.log("Connection succeeded!");
      });
      this.client.on("error", error => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        console.log(`Received message ${message} from topic ${topic}`);
      });
    }
  }
};
</script>
