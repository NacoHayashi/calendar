;'use strict';
$(function() {

  $('#calendar').fullCalendar({
    //basic setting
    locale :  "zh-tw",
    selectable: true,
    allDaySlot: true,
    eventLimit: true,
    firstDay:1,
    selectLongPressDelay:50,
    nextDayThreshold:'00:00:00',
    timeFormat: 'H:mm',
    displayEventTime: false,
    customButtons: {
      applyButton: {
        text: '休假申請',
        click: function() {
          $( this ).attr( {"data-toggle": "modal", "data-target":"#modalone"});
        }
      }
    },
    buttonText:{
        month:'Month',
        week:'Week',
        today:'Today',
        list:'Week list'
    },
    select: function(startDate, endDate) {
      start = startDate.format()
      end = moment(endDate).subtract(1, 'days').format();
      var totalDay = endDate.diff(startDate,'day');
      $('#modalone').modal('show')
      // alert('selected ' + start + ' to ' + end + '總共' + totalDay + '天' );
    },
    header: {
      left: 'month,basicWeek,listWeek',
      center: 'title',
      right: 'prev,next today applyButton'
    },
    events: [{
      title: '病假-早上\nNaco代理',
      start: '2019-03-12T09:30:00',
      end:'2019-03-12T12:00:00',
      backgroundColor:"#119688",
      textColor:'#fff',
    },{
      title: '事假-早上\nNaco代理',
      start: '2019-03-04T09:30:00',
      end:'2019-03-04T12:00:00',
      textColor:'#fff',
    }, {
      title: '特休-7天\nNaco代理',
      start: moment().add(7, 'days').format('YYYY-MM-DD'),
      end: moment().add(14, 'days').format('YYYY-MM-DD'), 
      backgroundColor:"#000",
      textColor:'#fff'
    },{
      title: '事假-下午\nNaco代理',
      start: '2019-03-04T13:00:00',
      end:'2019-03-04T18:30:00',
      textColor:'#fff',
    },{
      title: '事假-早上\nNaco代理',
      start: '2019-03-04T09:30:00',
      end:'2019-03-04T12:00:00',
      textColor:'#fff',
    }]
  });

  //setting adGeek theme
  var adGeekTheme = function () {
       $('.fc-button').addClass('ad_btn');
       $('.fc-today').css('background','#efdcf3');
       $('.fc-applyButton-button').addClass('ad_applyBtn');
       $('.fc-today-button').addClass('ad_todayBtn');
    }
 
  adGeekTheme();
});