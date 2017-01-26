---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU USER INACTIVE? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU USER INACTIVE?{:/}
 tag | {::nomarkdown}USRINACT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC evaluates user's DIUSER status and termination status when selected.Returns 0 if active        1 if inactive{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUUSR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the user in the NEW PERSON file (#200).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | USRINACT^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Is user inactive?
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  S TIUY=+$$GET1^DIQ(200,TIUDA_",",7,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}