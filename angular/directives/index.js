angular.module('app').directive('parent', ['$compile', function() {
  return {
    restrict: 'AE',
    templateUrl: '/directives/main.html',
    replace: true,
    controller: function($scope) {
      $scope.dconfig = {
        msgType: 'text',
        actionType: 'single', // 卡片跳转方式  single:整体跳转   alone: 单个跳转
        title: '', // 卡片标题
        content: '', // 内容
        singleTitle: '',
        singleUrl: ''
      }
    }
  }
}])

angular.module('app').directive('dingding', ['$compile', function() {
  return {
    restrict: 'AE',
    templateUrl: '/directives/dingding.html',
    replace: true,
    scope: {
      conf: '=',
      // msgTypeList: '='
    },
    link: function(scope, element, attrs) {
      var conf = scope.conf
      console.log(conf);

      scope.msgTypeList = [
        {
          label: '文本',
          value: 'text'
        },
        {
          label: '卡片',
          value: 'actionCard'
        }
      ]

      // 修改msgType
      scope.changeMsgType = function() {
        console.log(scope.conf);
        switch(scope.conf) {
          case 'text':
            
            break;
          case 'actionCard':
            break;
          default:
            break;
        }
      }
      // 修改actionType
      scope.setActionType = function(type) {
        scope.conf.actionType = type
      }

      var simplemde = new SimpleMDE({
        element: document.getElementById("markdown"),
        autofocus: true
      });
      simplemde.codemirror.on("change", function(){
        console.log('-------');
        scope.conf.content = simplemde.value()
      });
    }
  }
}])