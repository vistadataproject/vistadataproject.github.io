---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU WHICH SIGNATURE ACTION 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU WHICH SIGNATURE ACTION{:/}
 tag | {::nomarkdown}WHATACT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC infers whether the user is trying to sign or cosign the docuementin question, and indicates which ASU ACTION the GUI should pass to the TIUAUTHORIZATION RPC.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Evaluate/return whether signature or cosignature

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the TIU Document in file 8925.{:/} | 




 Generated on January 13th 2017, 5:52:13 am