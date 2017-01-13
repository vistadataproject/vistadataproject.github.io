---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET ALERT INFO 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET ALERT INFO{:/}
 tag | {::nomarkdown}GETALRT{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a TIU XQAID, return the patient and document type for the item beingalerted.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Retrieve DFN and document type for a TIU alert

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The XQAID of the alert.{:/} | 




 Generated on January 13th 2017, 6:44:47 am