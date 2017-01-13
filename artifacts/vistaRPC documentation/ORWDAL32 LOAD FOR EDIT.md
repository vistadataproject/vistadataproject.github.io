---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 LOAD FOR EDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 LOAD FOR EDIT{:/}
 tag | {::nomarkdown}EDITLOAD{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Load an allergy/adverse reaction for editing
 Input Parameters | {::nomarkdown}ORALIEN{:/}
 Lines | ```
 Q:+$G(ORALIEN)=0
 N ORNODE,I
 S ORNODE=$NAME(^TMP("GMRA",$J)),I=0
 D GETREC^GMRAGUI(ORALIEN,ORNODE)
 S Y=ORNODE```




 Generated on January 13th 2017, 6:55:29 am