---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG ALLTREE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG ALLTREE{:/}
 tag | {::nomarkdown}ALLTREE{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the tree for all display groups.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return the tree for all display groups
 Lines | {::nomarkdown} N ROOT,ILST<br/> S ILST=0,ROOT=$O(^ORD(100.98,"B","ALL",0))<br/> S ILST=ILST+1,LST(ILST)=ROOT_U_"ALL SERVICES^0^+"<br/> D LSTCHLD(ROOT){:/}




 Generated on January 13th 2017, 7:15:27 am