var app = angular.module("myApp", []);

app.controller("InputCtrl", function ($scope) {
	// 用户列表数据
	$scope.userList = {
		type: "user",
		value: [
			{
				model: "",
				value: "N000144",
				name: "陈海珍",
				select: 0,
				$$hashKey: "object:71",
			},
			{
				model: "",
				value: "0608382213680324",
				name: "刘炜",
				select: 0,
				$$hashKey: "object:72",
			},
			{
				model: "",
				value: "N000306",
				name: "马毅光",
				select: 0,
				$$hashKey: "object:73",
			},
			{
				model: "",
				value: "122558116620877692",
				name: "马光",
				select: 0,
				$$hashKey: "object:74",
			},
			{
				model: "",
				value: "0315533552-783647052",
				name: "马毅光111",
				select: 0,
				$$hashKey: "object:75",
			},
			{
				model: "",
				value: "024304613821288007",
				name: "马毅光22",
				select: 0,
				$$hashKey: "object:76",
			},
			{
				model: "",
				value: "291849071320847926",
				name: "刘五洲",
				select: 0,
				$$hashKey: "object:77",
			},

			{
				model: "",
				value: "292758644726278800",
				name: "杨友向",
				select: 0,
				$$hashKey: "object:3345",
			},
			{
				model: "",
				value: "292912435426234104",
				name: "晋方秀",
				select: 0,
				$$hashKey: "object:3346",
			},
			{
				model: "",
				value: "292912012232356525",
				name: "胡丰琼",
				select: 0,
				$$hashKey: "object:3347",
			},
			{
				model: "",
				value: "276319106321617708",
				name: "唐友文",
				select: 0,
				$$hashKey: "object:3348",
			},
			{
				model: "",
				value: "291766301226207651",
				name: "李德芬",
				select: 0,
				$$hashKey: "object:3349",
			},
		],
		name: "用户",
		select: 0,
		className: "user",
		$$hashKey: "object:66",
	};
	const udom = document.querySelector(".input-list-wrap");

	$scope.selectUserList = [];
	$scope.filterUserList = []; // 根据关键字过滤用户
	$scope.keyword = "";
	$scope.showSuggest = false;
	$scope.udomHeight = 40;
	$scope.inputChange = function (e) {
		$scope.udomHeight = udom.clientHeight + 10;
		if ($scope.keyword) {
			$scope.filterUserList = $scope.userList.value.filter((item) => {
				if (isSelected(item, $scope.selectUserList)) {
					item.selected = true;
				}
				return item.name.includes($scope.keyword);
			});
			$scope.showSuggest = true;
			// 遍历过滤的数据，看看那些已经被选中了
		} else {
			$scope.filterUserList = [];
			$scope.showSuggest = false;
		}

		console.log($scope.filterUserList);
	};
	$scope.selectUser = function (item) {
		item.selected = true;
		$scope.selectUserList.push(item);
	};
	$scope.closeSuggest = function () {
		$scope.showSuggest = false;
		$scope.keyword = "";
	};
	$scope.deleteUser = function (user) {
		const index = $scope.selectUserList.findIndex(
			(v) => v.value === user.value
		);
		$scope.selectUserList.splice(index, 1);
	};
	function isSelected(item, data) {
		return data.find((v) => v.value === item.value);
	}
});
