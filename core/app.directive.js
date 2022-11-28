function listenValidate(id, cell, isOption = false) {
    if (!isOption) {
        $(cell).on('input', (e) => {
            validateCell(id, cell);
        });
        $(cell).on('blur', (e) => {
            validateCell(id, cell);
        });
    } else {

    }

}

function validateCell(id, cell) {
    let parentInput = $(cell).parent();
    // Nếu validate failed thì add thêm mess
    let config = dataRows[get_i_j(id).i][get_i_j(id).j];
    let mess = parentInput.children('.invalid-feedback')[0];
    if (config.required) {
        if (!config.value) {
            mess.innerText = `error: ${config.title} required`;
            mess.classList.add("show-custom");
        } else {
            mess.innerHTML = '&nbsp;';
        }
    } else {
    }
}

function get_i_j(id) {
    let i = id.split('_')[1];
    let j = id.split('_')[2];
    return {
        i: i, j: j
    }
}


app.directive('myData', function ($compile) {
    return {
        restrict: 'AEC',
        scope: {
            innerscope: '=inputs',
            outterscope: '=outterscope'
        },
        link: (scope, element, attrs, controller, transcludeFn) => {
            console.log(element);

            // Nếu là option 
            if (scope.innerscope.type == 'option') {
                // $(element).append($('<option>', {
                //     value: '',
                //     text: '-- Chọn --'
                // }));
                // if (scope.innerscope.data.option) {
                //     scope.innerscope.data.option.forEach(opt => {
                //         $(element).append($('<option>', {
                //             value: opt.id,
                //             text: opt.value
                //         }));
                //     })
                // }

                $(element).on('focus', (e)=>{
                    let parent = $(element).parent(); 
                    //$(parent).append('<h1>{{scope.innerscope.value}}</h1>')
                    `<h1 ng-click='insideChange()'></h1>`
                    angular.element($(parent)).append($compile('<div ng-bind-template="{{innerscope.value}}"></div>')(scope));
                    angular.element($(parent)).append($compile(`<h1 ng-click='insideChange()'>z</h1>`)(scope));
                })

                $(element).on('blur', (e)=>{
                    console.log('blur');
                    e.stopPropagation(); 
                })
            }

            // input or select 
            listenValidate(scope.innerscope.id, element, scope.innerscope.type == 'option');
            

        },
        controller: ($scope)=>{
            $scope.insideChange = ()=>{
                console.log('inside');
            }
        }
    }
});
