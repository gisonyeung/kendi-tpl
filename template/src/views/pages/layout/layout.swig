<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <meta name="wap-font-scale" content="no">
  <link rel="shortcut icon" href="@/pages/layout/favicon.png">
  <link rel="dns-prefetch" href="//kandian.qq.com/">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="x5-pagetype" content="newspage"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="Copyright" content="Tencent"/>
  <meta name="format-detection" content="telephone=no"/>
  <meta itemprop="name" content="{% block title %}{% endblock %}"/>
  <meta name="description" itemprop="description" content="{% block title %}{% endblock %}"/>
  <title>{% block title %}{% endblock %}</title>
  <script type="text/javascript">
    var t0 = Date.now();
    window._timePoints = [t0];
  </script><!--ignore-->
  <link rel="stylesheet" href="@/pages/layout/layout.scss">
  {% block style %}{% endblock %}
  </head>
  <body>
  {% block content %}{% endblock %}
  <script type="text/javascript">window._timePoints[1] = Date.now();</script><!--ignore-->
  <script src="@/lib/mod/mod.js"></script>
  <script src="@/lib/qq/bj-report.js"></script>
  <script>
    BJ_REPORT.init({id: 1036});
  </script><!--ignore-->
  <script src="//open.mobile.qq.com/sdk/qqapi.js?_bid=152"></script>
  <script type="text/javascript">
    if (mqq) {
      mqq.device.getNetworkType(function(result){
        //是否使用了离线包
        mqq.offline.isCached({bid: 2378}, function (localVersion) {
          //有离线包或wifi或4G去掉进度条
          if(localVersion != -1 || result == 1 || result == 4){
            mqq.ui.setWebViewBehavior({
              progressBar:false,
            })
          }
        });
      });
      //设置左上角按钮返回
      mqq.ui.setTitleButtons({
        left: {
          title: "返回"
        },
        right: {
          hidden: true
        }
      });
    }
  </script><!--ignore-->
  <script src="//s.url.cn/pub/zepto/1.1.6/zepto.all.js?_bid=303"></script>
  <script src="//i.gtimg.cn/club/reporter/reportSpeed.js"></script>
  <script src="@/lib/vue/vue.js"></script>
  <script src="@/lib/fastclick/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      window.addEventListener('load', function() {
        FastClick.attach(document.body);
      }, false);
    }
  </script><!--ignore-->
  {% block script %}{% endblock %}
  </body>
</html>