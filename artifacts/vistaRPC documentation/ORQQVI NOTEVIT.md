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
 Lines | {::nomarkdown} N VSTR,NOTEDATE<br/> D NOTEVSTR^ORWPCE(.VSTR,NOTEIEN)<br/> Q:$P(VSTR,";",2)=""<br/> D FASTVIT(.ORY,DFN,$P(VSTR,";",2)){:/}




 Generated on January 13th 2017, 7:15:27 am