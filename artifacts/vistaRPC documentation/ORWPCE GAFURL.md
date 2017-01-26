---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GAFURL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GAFURL{:/}
 tag | {::nomarkdown}GAFURL{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the GAF Scale Rating Form URL{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GAFURL^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns the MH GAF Web Page URL
 Code | {::nomarkdown}  S URL=""<br> I $T(GAFURL^YTAPI5)'="" D<br> .N ORY<br> .D GAFURL^YTAPI5(.ORY)<br> .I $G(ORY(1))="[DATA]" S URL=$G(ORY(2)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}