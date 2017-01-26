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

 Property | Value 
 --- | --- 
 Method | MAKEADD^[TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 Method comment | Create addendum
 Input parameters | {::nomarkdown}TIUDA, TIUX, SUPPRESS{:/}
 First comment | {::nomarkdown}<pre> For backward compatibility<br/> Use MAKEADD^TIUSRVP2 now, please</pre>{:/}
 Code | {::nomarkdown}  D MAKEADD^TIUSRVP2(.TIUDADD,TIUDA,.TIUX,+$G(SUPPRESS)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}