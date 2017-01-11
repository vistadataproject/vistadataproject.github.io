---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROIR2 RTYP RECEIVED METHOD 

 property | value 
--- | --- 
 label | DSIROIR2 RTYP RECEIVED METHOD
 tag | RTYP
 routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
 return value type | GLOBAL ARRAY
 description | This is produces the data for the Received Status report. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SDATE | LITERAL |  | true | SDATE - start date.  This is the date to begin pulling data for the report. | 
| EDATE | LITERAL |  |  | EDATE - end date.  This is the last date to be used when pulling report data. | 
| DIVL | LITERAL |  |  | DIVL  - List of selected divisions - NULL means all divisions | 




Generated on January 11th 2017, 6:34:23 am