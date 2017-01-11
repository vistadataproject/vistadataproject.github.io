---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC SR DETAIL 

 property | value 
--- | --- 
 label | DSIC SR DETAIL
 tag | DETAILSR
 routine | [DSICSRPT](http://code.osehra.org/dox/Routine_DSICSRPT_source.html)
 return value type | ARRAY
 description | For a surgical case, this returns the operation report, anesthesia report, nurse's report, and procedure report.  Which reports are returned depends upon the input paramter FLAG value.  It defaults to Op report and Anesthesia report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSISRTN | LITERAL | 20 | true | This is the internal file number from file 130, i.e., CASE# | 
| FLAG | LITERAL | 4 | true | Optional parameter - string of characters indicating which reports to return:  FLAG[\O\ - return Operation Report       \A\ - return Anesthesia Report       \N\ - return Nurse's Report       \P\ - return Procedure Report (NON-OR) Default to FLAG=\OA\ | 




Generated on January 11th 2017, 6:34:23 am