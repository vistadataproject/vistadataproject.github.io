---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET REPORT LIST 

 property | value 
--- | --- 
 label | DSIR GET REPORT LIST
 tag | RPTLIST
 routine | [DSIROIAH](http://code.osehra.org/dox/Routine_DSIROIAH_source.html)
 return value type | ARRAY
 description | RETURNS A LIST OR REPORT NAMES AND THEIR IENS OR A SINGLE REPORT AND IT'S IEN IF A REPORT NAME IS PASSED IN THE OPTIONAL PARAMETER.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RNAME | LITERAL | 30 | true | RNAME - (OPTIONAL) REPORT NAME FOR A SPECIFIC REPORT | 