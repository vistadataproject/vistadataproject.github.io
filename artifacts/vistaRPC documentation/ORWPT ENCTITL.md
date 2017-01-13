---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT ENCTITL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT ENCTITL{:/}
 tag | {::nomarkdown}ENCTITL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns external values to display for encounter in format:     LOCNAME^LOCABBR^ROOMBED^PROVNAME{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return external values for encounter
 Input Parameters | {::nomarkdown}DFN<br/>LOC<br/>PROV{:/}
 Lines | ```
 S $P(REC,U,1)=$P($G(^SC(+LOC,0)),U,1,2)
 S $P(REC,U,3)=$P($G(^DPT(DFN,.101)),U)
 S $P(REC,U,4)=$P($G(^VA(200,+PROV,0)),U)```
 Leading comment lines | {::nomarkdown}LOCNAME^LOCABBR^ROOMBED^PROVNAME{:/}




 Generated on January 13th 2017, 6:55:28 am