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
        singleUrl: '',
        btnOrientation: 0,
        btnJsonList: [
          {
            title: '1',
            actionUrl: '2'
          }
        ]
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

      // 消息类型
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
      // 独立跳转时，按钮的排列方式
      scope.btnOrientationList = [
        {
          label: '竖直排列',
          value: 0
        },
        {
          label: '横向排列',
          value: 1
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


      // markdown编辑器
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