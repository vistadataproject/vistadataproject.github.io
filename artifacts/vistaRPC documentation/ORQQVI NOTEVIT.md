---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQVI NOTEVIT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI NOTEVIT{:/}
 tag | {::nomarkdown}NOTEVIT{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NOTEVIT^[ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 Input parameters | {::nomarkdown}DFN<br/>NOTEIEN{:/}
 Code | ```  N VSTR,NOTEDATE
 D NOTEVSTR^ORWPCE(.VSTR,NOTEIEN)
 Q:$P(VSTR,";",2)=""
 D FASTVIT(.ORY,DFN,$P(VSTR,";",2))```




 Generated on January 14th 2017, 7:26:35 am