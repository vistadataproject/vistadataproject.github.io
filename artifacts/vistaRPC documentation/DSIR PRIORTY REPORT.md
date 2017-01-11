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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| START DATE | LITERAL | 7 | true | FileMan date to start report. | 
| END DATE | LITERAL | 7 | true | FileMan date to report through, defaults to current day. | 
| DIVISION(S) | LITERAL | 999 | true | '^' delimited string of internal division numbers to use for multi-divisional reporting. If string is null only the division of the user or all if user holds the DSIR MDIV key. | 




Generated on January 11th 2017, 6:34:23 am