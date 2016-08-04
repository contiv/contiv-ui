/**
 * Created by cshampur on 7/22/16.
 */

angular.module("contiv.utils")
    .factory("SortService", function(){
        var sortservice = {}

        sortservice.sort = function(sortfield,ctrlSortObj){
            var sortObj = {}

            sortObj.field = sortfield;
            sortObj.reverse = !ctrlSortObj.reverse;
            sortObj.iconDirection = {
                "unassociated icon" : sortObj.reverse,
                "up icon" : !sortObj.reverse
            }
            return sortObj;
        }

        sortservice.initializeSort = function(sortfield){
            return {
                field:sortfield,
                reverse: false,
                iconDirection: {"unassociated icon": true, "up icon": false}
            }
        }

        return sortservice;
    });