---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ID ATTACH ENTRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU ID ATTACH ENTRY{:/}
 tag | {::nomarkdown}IDATTCH{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will attach a a document as an Interdisciplinary (ID) entry to anID Parent document.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the Entry which is to be attached as the ID Child.{:/} | 
| {::nomarkdown}TIUDAD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the TIU Document which is to be theID Parent to which the ID Entry is attached.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IDATTCH^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Attach TIUDA as ID Child entry to TIUDAD
 Input parameters | {::nomarkdown}TIUDA, TIUDAD{:/}
 Code | {::nomarkdown}  N TIUX<br> S TIUX(2101)=TIUDAD<br> D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX,1)<br> D AUDLINK^TIUGR1(TIUDA,"a",TIUDAD)<br> D SENDID^TIUALRT1(TIUDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}