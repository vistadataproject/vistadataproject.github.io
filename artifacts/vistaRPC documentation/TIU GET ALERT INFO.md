---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET ALERT INFO 

 property | value 
--- | --- 
 label | TIU GET ALERT INFO
 tag | GETALRT
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | SINGLE VALUE
 description | Given a TIU XQAID, return the patient and document type for the item beingalerted.


### Method description

 property | value 
--- | --- 
 Method comment | Retrieve DFN and document type for a TIU alert

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 60 | true | The XQAID of the alert. | 




 ###### Generated on January 11th 2017, 6:39:42 am