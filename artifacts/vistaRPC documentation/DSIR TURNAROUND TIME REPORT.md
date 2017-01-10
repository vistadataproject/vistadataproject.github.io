---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR TURNAROUND TIME REPORT 

 property | value 
--- | --- 
 label | DSIR TURNAROUND TIME REPORT
 tag | TURN
 routine | [DSIROIR1](http://code.osehra.org/dox/Routine_DSIROIR1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return a list of ROI Instance file IEN's and the Processing time to either complete or to the end of the selected date range.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CLERK | LITERAL | 99 | true | This is the DUZ of the selected clerk. | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 7 | true | This is the FileMan date to start the report.  If null the process will start at the earilest date on file. | 
| vs:Input_Parameter-8994_02 | END DATE | LITERAL | 7 | true | This is the FileMan date the report runs through.  If null the current day is used as the end date. | 