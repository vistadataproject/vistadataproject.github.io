---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU CREATE ADDENDUM RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU CREATE ADDENDUM RECORD{:/}
 tag | {::nomarkdown}MAKEADD{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure allows the creation of addenda to TIU Documents.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the parent document in file 8925.{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a local input array containing the data to be filed for theaddendum record, formatted as described for the TIU UPDATE RECORD RPC.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MAKEADD^[TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 Method comment | Create addendum
 First comment | {::nomarkdown}For backward compatibility<br/>Use MAKEADD^TIUSRVP2 now, please{:/}
 Input parameters | {::nomarkdown}TIUDA<br>TIUX<br>SUPPRESS{:/}
 Code | {::nomarkdown}  D MAKEADD^TIUSRVP2(.TIUDADD,TIUDA,.TIUX,+$G(SUPPRESS)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}