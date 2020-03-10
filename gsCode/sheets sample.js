var app = SpreadsheetApp;
var ss = app.getActiveSpreadsheet();

var scheduleSheet = ss.getSheetByName("Schedule");
var scheduleRange = scheduleSheet.getRange('E5:J32');
var scheduleValues = scheduleRange.getValues();
var scheduleColors = scheduleRange.getFontColors();
