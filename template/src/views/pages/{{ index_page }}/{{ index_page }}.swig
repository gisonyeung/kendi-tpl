{% extends '../layout/layout.swig' %}

{% block title %}{{ index_page }}{% endblock %}

{% block content %}
  <div id="root"></div>
{% endblock %}

{% block script %}
  <script type="text/javascript">
   // 同步依赖，配合packager后所有依赖文件在构建时将会被一并打包
    require('{{ index_page }}/{{ index_page }}.js').init($('#root')[0]);

    // require(['{{ index_page }}/{{ index_page }}.js'], function (page) { // 异步依赖，进入页面后再发异步请求模块
   	// 	page.init($('#root')[0]);
    // });
  </script>

{% endblock %}