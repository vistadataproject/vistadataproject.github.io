---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GAFOK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GAFOK{:/}
 tag | {::nomarkdown}GAFOK{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if supporting mental health code exists to read and writeGAF scores.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GAFOK^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Returns true if all supporting MH GAF Code exists
 Code | {::nomarkdown}  S ORY=0<br> I $T(GAFHX^YSGAFAPI)'="",$T(ENT^YSGAFAP1)'="" S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}