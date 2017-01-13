---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU UNLOCK RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU UNLOCK RECORD{:/}
 tag | {::nomarkdown}UNLOCK{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will decrement the lock on a given TIU Document Record, identifiedby the TIUDA input parameter. The return value will always be 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Decrement Lock on a TIU Document record

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the record in the TIU DOCUMENT FILE (#8925).{:/} | 




 Generated on January 13th 2017, 6:44:47 am