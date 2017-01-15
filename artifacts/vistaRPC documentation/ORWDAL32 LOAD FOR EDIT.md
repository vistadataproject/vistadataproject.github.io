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

 property | value 
 --- | --- 
 Method | EDITLOAD^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Load an allergy/adverse reaction for editing
 Input parameters | {::nomarkdown}ORALIEN{:/}
 Code | {::nomarkdown}  Q:+$G(ORALIEN)=0<br> N ORNODE,I<br> S ORNODE=$NAME(^TMP("GMRA",$J)),I=0<br> D GETREC^GMRAGUI(ORALIEN,ORNODE)<br> S Y=ORNODE{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}