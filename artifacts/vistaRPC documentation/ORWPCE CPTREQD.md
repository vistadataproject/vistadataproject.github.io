---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE CPTREQD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE CPTREQD{:/}
 tag | {::nomarkdown}CPTREQD{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if TIU DOCUMENT file entry needs a CPT code.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CPTREQD^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | return 1 in VAL if note still needs a CPT code
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  S VAL=+$P(^TIU(8925,IEN,0),U,11){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}