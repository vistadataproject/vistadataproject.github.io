---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR PRIORTY REPORT 

 property | value 
--- | --- 
 label | DSIR PRIORTY REPORT
 tag | PRIRTY
 routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns the data for the High Priority Request Report.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 7 | true | FileMan date to start report. | 
| vs:Input_Parameter-8994_02 | END DATE | LITERAL | 7 | true | FileMan date to report through, defaults to current day. | 
| vs:Input_Parameter-8994_02 | DIVISION(S) | LITERAL | 999 | true | '^' delimited string of internal division numbers to use for multi-divisional reporting. If string is null only the division of the user or all if user holds the DSIR MDIV key. | 