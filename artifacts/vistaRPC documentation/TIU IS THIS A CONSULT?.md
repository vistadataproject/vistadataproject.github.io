---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IS THIS A CONSULT? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS THIS A CONSULT?{:/}
 tag | {::nomarkdown}ISCNSLT{:/}
 routine | [TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}BOOLEAN RPC which evaluates whether the title indicated is that of aconsult.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the record number in file 8925.1 for the title selected.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISCNSLT^[TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html)
 Method comment | Boolean RPC to evaluate whether TITLE is a CONSULT
 Input parameters | {::nomarkdown}TITLE{:/}
 Code | {::nomarkdown}  N TIUCLASS<br> S TIUCLASS=+$$CLASS<br> I +TIUCLASS'>0 S TIUY=0 Q<br> S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}