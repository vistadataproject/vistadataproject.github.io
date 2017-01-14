---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU UNLOCK RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU UNLOCK RECORD{:/}
 tag | {::nomarkdown}UNLOCK{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will decrement the lock on a given TIU Document Record, identifiedby the TIUDA input parameter. The return value will always be 0.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the record in the TIU DOCUMENT FILE (#8925).{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | UNLOCK^[TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 Method comment | Decrement Lock on a TIU Document record
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  L -^TIU(8925,+TIUDA) S ERR=0<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}