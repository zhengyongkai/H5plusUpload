import mqtt from "mqtt";
/*
使用方法
this.client= new initMqtt().connect()
*/

function initMqtt(options) {
  const {
    hostname,
    port,
    timeout,
    keepAlive,
    cleanSession,
    ssl,
    userName,
    password,
    path
  } = options || {};
  this.hostname = hostname || "192.168.10.65";
  this.port = port || 9001;
  this.options = {
    clean: true, // 保留会话
    connectTimeout: 4000, // 超时时间
    reconnectPeriod: 4000, // 重连时间间隔
    clientId: "41215676e5cf4e638a3fae8c5cf38024",
    username: userName || "admin",
    password: password || "123456",
  };
  this.connectUrl = `ws://${this.hostname}:${this.port}`;
}

initMqtt.prototype.connect = function(onSuccess, onLost, onMessageArrival) {
  try {
    this.client = mqtt.connect(this.connectUrl, this.options);
  } catch (error) {
    console.log("mqtt.connect error", error);
  }
  this.client.on("connect", () => onSuccess());
  this.client.on("error", error => onLost);
  this.client.on("message", (topic, message) => onMessageArrival(topic, message.toString()));
  return this.client;
};
initMqtt.prototype.disconnect = function() {
  if (this.client) {
     this.client = null;
  }
};

export default initMqtt;
