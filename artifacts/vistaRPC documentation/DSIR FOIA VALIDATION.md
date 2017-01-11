---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR FOIA VALIDATION 

 property | value 
--- | --- 
 label | DSIR FOIA VALIDATION
 tag | FOIA
 routine | [DSIROIRV](http://code.osehra.org/dox/Routine_DSIROIRV_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return a global array of all records thkat were looked at for the year end FOIA report.  It will contain the internal request number and patient name/FOIA indicator, and a one for any block on the report that the given request was included on.  It also contains all record that, during the report period, were entered in error or of the type of request/requestor type of an excluded state reporting agency.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| START DATE | LITERAL | 99 | true |  | 
| END DATE | LITERAL | 99 | true |  | 
| DIVISION(S) | LIST | 99 | true |  | 




Generated on January 11th 2017, 6:34:23 am