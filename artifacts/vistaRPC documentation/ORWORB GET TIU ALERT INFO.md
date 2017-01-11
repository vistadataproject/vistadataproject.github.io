---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORB GET TIU ALERT INFO 

 property | value 
--- | --- 
 label | ORWORB GET TIU ALERT INFO
 tag | GETALRT
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | SINGLE VALUE
 description | Given a TIU XQAID, return the patient and document type for the item beingalerted.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 60 | true | The XQAID of the alert. | 