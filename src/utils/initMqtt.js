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
  this.hostname = hostname || "broker.emqx.io";
  this.port = port || 8083;
  this.options = {
    clean: true, // 保留会话
    connectTimeout: 2000, // 超时时间
    reconnectPeriod: 500, // 重连时间间隔
    clientId: "clientId-Ba3y1BYQBT",
    username: userName || "admin",
    password: password || "123456",
    path:'/mqtt'
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
  this.client.on("error", () => onLost());
  this.client.on("timeout", () => {
    console.log('....')
  });
  this.client.on("message", (topic, message) =>
    onMessageArrival(topic, message.toString())
  );
  console.log(this.client);
  return this.client;
};
initMqtt.prototype.disconnect = function() {
  if (this.client) {
    this.client.end();
    this.client = null;
  }
};

export default initMqtt;
