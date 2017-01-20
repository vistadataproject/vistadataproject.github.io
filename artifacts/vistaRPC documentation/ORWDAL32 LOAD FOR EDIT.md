---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 LOAD FOR EDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 LOAD FOR EDIT{:/}
 tag | {::nomarkdown}EDITLOAD{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | EDITLOAD^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Load an allergy/adverse reaction for editing
 Input parameters | {::nomarkdown}ORALIEN{:/}
 Code | {::nomarkdown}  Q:+$G(ORALIEN)=0<br> N ORNODE,I<br> S ORNODE=$NAME(^TMP("GMRA",$J)),I=0<br> D GETREC^GMRAGUI(ORALIEN,ORNODE)<br> S Y=ORNODE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}