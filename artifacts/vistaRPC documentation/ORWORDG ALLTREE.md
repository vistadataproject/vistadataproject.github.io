---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORDG ALLTREE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG ALLTREE{:/}
 tag | {::nomarkdown}ALLTREE{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the tree for all display groups.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ALLTREE^[ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 Method comment | Return the tree for all display groups
 Code | ```  N ROOT,ILST
 S ILST=0,ROOT=$O(^ORD(100.98,"B","ALL",0))
 S ILST=ILST+1,LST(ILST)=ROOT_U_"ALL SERVICES^0^+"
 D LSTCHLD(ROOT)```




 Generated on January 14th 2017, 7:26:35 am