(function () {
  'use strict';
  angular.module('customizedDashboardApp')
    .controller('MainCtrl', mainController);

  function mainController() {
    this.xList = [
      {
        "name": 'a',
        "number": '1',
        "date": '1360413309421',
        "class": 'purple'
      },
      {
        "name": 'b',
        "number": '5',
        "date": '1360213309421',
        "class": 'orange'
      },
      {
        "name": 'c',
        "number": '10',
        "date": '1360113309421',
        "class": 'blue'
      },
      {
        "name": 'd',
        "number": '2',
        "date": '1360113309421',
        "class": 'green'
      },
      {
        "name": 'e',
        "number": '6',
        "date": '1350613309421',
        "class": 'green'
      },
      {
        "name": 'f',
        "number": '21',
        "date": '1350613309421',
        "class": 'orange'
      },
      {
        "name": 'g',
        "number": '3',
        "date": '1340613309421',
        "class": 'blue'
      },
      {
        "name": 'h',
        "number": '7',
        "date": '1330613309001',
        "class": 'purple'
      },
      {
        "name": 'i',
        "number": '22',
        "date": '1360412309421',
        "class": 'blue'
      }
    ];

    this.addToList = function () {
      var item = {
        "name": "Nannous",
        "class": "blue",
        "date": "1455027274440",
        number: "13"
      };
      this.xList.push(item);
    };

    this.removeItem = function(elem) {
      if (!Array.prototype.filter) return;
      var s=angular.element('.houbeb').scope();
      var number = $(elem)[0].x.number;
      this.xList = s.main.xList.filter(function( obj ) {
        return +obj.number != +number;
      });
      s.$apply(s.xList = items);
    };
  }
})();
