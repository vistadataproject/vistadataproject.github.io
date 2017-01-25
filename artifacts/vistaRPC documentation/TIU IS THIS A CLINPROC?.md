---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IS THIS A CLINPROC? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS THIS A CLINPROC?{:/}
 tag | {::nomarkdown}ISCP{:/}
 routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC evaluates whether or not a Title is under theCLINICAL PROCEDURES Class.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the TIU Document file (#8925.1) IEN for the Title selected.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISCP^[TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 Method comment | RPC that evaluates whether or not a Title is under
 Input parameters | {::nomarkdown}TITLE{:/}
 First comment | {::nomarkdown}<pre>the CLINICAL PROCEDURES Class<br/> Input  -- TITLE    TIU Document Definition file (#8925.1) IEN<br/>                    (May be Document Class instead of Title.)<br/> Output -- TIUY     1=True and 0=False</pre>{:/}
 Code | {::nomarkdown}  N TIUCLASS<br> I +$G(TITLE)'>0 S TIUY=0 G ISCPQ<br> S TIUCLASS=+$$CLASS<br> I +TIUCLASS'>0 S TIUY=0 G ISCPQ<br> S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}