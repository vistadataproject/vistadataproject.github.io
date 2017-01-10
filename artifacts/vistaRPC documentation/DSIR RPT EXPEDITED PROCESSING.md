---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR RPT EXPEDITED PROCESSING 

 property | value 
--- | --- 
 label | DSIR RPT EXPEDITED PROCESSING
 tag | EXPRPT
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | GLOBAL ARRAY
 description | THIS CALL PROVIDES DATA FOR THE EXPEDITED PROCESSING REPORT IN ROI

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FRDT | LITERAL | 7 | true | FRDT - From Date - FileMan Format - No time | 
| vs:Input_Parameter-8994_02 | TODT | LITERAL | 7 | true | TODT To Date - FileMan Format - No time | 
| vs:Input_Parameter-8994_02 | DIV | LITERAL | 15 | true | DIV - Division number/Location number - defaults to DUZ(2) | 