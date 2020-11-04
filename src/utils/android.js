//获取系统方法
function takePhoto(callback) {
  var cmr = plus.camera.getCamera();
  cmr.captureImage(
    function(p) {
      plus.io.resolveLocalFileSystemURL(
        p,
        function(entry) {
          dealImage(
            entry.toLocalURL(),
            {
              width: 100,
              height: 100,
              quality: 0.7
            },
            function(base64) {
              console.log(base64);
              callback(base64);
            }
          );
        },
        function(e) {
          outLine("读取拍照文件错误：" + e.message);
        }
      );
    },
    function(e) {},
    { filename: "_doc/camera/", index: 1 }
  );
}

function takefromgalery(callback) {
  plus.gallery.pick(
    function(e) {
      for (var i in e.files) {
        console.log(e.files[i]);
        plus.io.resolveLocalFileSystemURL(
          e.files[i],
          function(entry) {
            dealImage(
              entry.toLocalURL(),
              {
                width: 100,
                height: 100,
                quality: 0.7
              },
              function(base64) {
                callback(base64)
              }
            );
          },
          function(e) {
            outLine("读取拍照文件错误：" + e.message);
          }
        );
      }
    },
    function(e) {
      console.log("取消选择图片");
    },
    { filter: "image", multiple: true }
  );
}

function dealImage(path, obj, callback) {
  var img = new Image();
  img.src = path;
  img.onload = function() {
    var that = this;
    // 默认按比例压缩
    var w = that.width,
      h = that.height,
      scale = w / h;
    w = obj.width || w;
    h = obj.height || w / scale;
    var quality = 0.9; // 默认图片质量为0.7
    //生成canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    // 创建属性节点
    var anw = document.createAttribute("width");
    anw.nodeValue = w;
    var anh = document.createAttribute("height");
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(that, 0, 0, w, h);
    // 图像质量
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality;
    }
    // quality值越小，所绘制出的图像越模糊
    var base64 = canvas.toDataURL("image/jpeg", quality);
    // 回调函数返回base64的值
    callback(base64);
  };
}
export { takePhoto, takefromgalery, dealImage };
