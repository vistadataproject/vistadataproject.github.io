---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ERROR LOG LIST 

 property | value 
--- | --- 
 label | KMPD ERROR LOG LIST
 tag | ERRLIST
 routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
 return value type | GLOBAL ARRAY
 description | Return a list of errors for a certain date from file #3.075 (ERROR LOG).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM1 | LITERAL | 60 | true | Internal entry for file #3.075 (ERROR LOG).  This value will be $P($H,\,\). | 
| SCREEN | LITERAL | 254 | true | Screen for ERROR TYPE. | 
| DATAGLOBAL | LITERAL | 60 | true | Return global for data (^TMP($J). | 




 Generated on January 11th 2017, 7:15:04 am