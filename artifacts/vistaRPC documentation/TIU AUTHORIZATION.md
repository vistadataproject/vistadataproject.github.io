---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU AUTHORIZATION 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU AUTHORIZATION{:/}
 tag | {::nomarkdown}CANDO{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows the calling application to evaluate privilege to performany ASU-mediated action on a TIU document.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Boolean function to evaluate privilege

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) of the document in file 8925.{:/} | 
| {::nomarkdown}TIUACT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the ASU ACTION (.01 field from file 8930.8) which is to beperformed by the calling application (e.g., EDIT RECORD, SIGNATURE, COPY,etc.).  To function appropriately, only valid actions may be passed.{:/} | 




 Generated on January 13th 2017, 6:44:47 am