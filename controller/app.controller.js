app.controller('myCtrl', ($scope) => {
    $scope.name = 'Vu Viet Anh';
    $scope.inputs = inputs;
    $scope.dataRows = dataRows;
    $scope.export = $scope;
    $scope.addLine = () => {
        let input = []
        for (let j = 0; j < inputs.length; j++) {
            let cell = JSON.parse(JSON.stringify(inputs[j]));
            cell['id'] = `field_${$scope.dataRows.length}_${j}`;
            input.push(cell);
        }
        $scope.dataRows.push(input);
    }
    // Test drop down:
    $scope.dataSelect = dataSelect;
    $scope.testSelect = '';
    $scope.addData = () => {
        $scope.dataRows[0][3].data.option.push({
            id: '10',
            value: 'zzzzzz'
        })
    }
}); 


