'use strict';

angular.module('doujinReleaseTracker')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('archive', stateFactory('Archive', {
            url: '/archive',
            templateUrl: 'states/archive/index/main-view.html'
        }));
    })
    .controller('ArchiveCtrl', function ($scope, EventsRepository) {
        EventsRepository.getAll().then(function (events) {
            var ids = Object.keys(events);
            
            var eventList = new Array();
            
            angular.forEach(ids, function(id, key1){
                var date = events[id].date;
                
                eventList.push({'id': id, 'date': date});
            });
            
            eventList.reverse();

            $scope.events = eventList;
        });
    });
