---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE CPTREQD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE CPTREQD{:/}
 tag | {::nomarkdown}CPTREQD{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if TIU DOCUMENT file entry needs a CPT code.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return 1 in VAL if note still needs a CPT code
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```{::nomarkdown} S VAL=+$P(^TIU(8925,IEN,0),U,11)```{:/}




 Generated on January 13th 2017, 7:11:26 am