---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI NOTEVIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI NOTEVIT{:/}
 tag | {::nomarkdown}NOTEVIT{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN<br/>NOTEIEN{:/}
 Lines | ```
 N VSTR,NOTEDATE
 D NOTEVSTR^ORWPCE(.VSTR,NOTEIEN)
 Q:$P(VSTR,";",2)=""
 D FASTVIT(.ORY,DFN,$P(VSTR,";",2))```




 Generated on January 13th 2017, 6:55:29 am