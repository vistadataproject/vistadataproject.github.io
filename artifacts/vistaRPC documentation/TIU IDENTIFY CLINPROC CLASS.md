---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IDENTIFY CLINPROC CLASS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU IDENTIFY CLINPROC CLASS{:/}
 tag | {::nomarkdown}CPCLASS{:/}
 routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC gets the CLINICAL PROCEDURES TIU Document Definitionfile (#8925.1) IEN.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CPCLASS^[TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 Method comment | RPC that gets the CLINICAL PROCEDURES TIU Document
 First comment | {::nomarkdown}<pre>Definition file (#8925.1) IEN<br/> Input  -- None<br/> Output -- Y        TIU Document Definition file (#8925.1) IEN</pre>{:/}
 Code | {::nomarkdown}  S Y=$$CLASS{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}