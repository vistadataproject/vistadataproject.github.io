---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORECS01 VSITID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORECS01 VSITID{:/}
 tag | {::nomarkdown}VSITID{:/}
 routine | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return Visit IEN ptr to #9000010
 Input Parameters | {::nomarkdown}VSTSTR{:/}
 Lines | ```{::nomarkdown} N DTREF,PTID<br/> S ORY=0<br/> S DTREF=9999999-$P($P(VSTSTR,";",2),".")_"."_$P($P(VSTSTR,";",2),".",2)<br/> S PTID=+$P(VSTSTR,";",4)<br/> S:$D(^AUPNVSIT("AA",PTID,DTREF)) ORY=$O(^(DTREF,0))```{:/}
 Leading comment lines | {::nomarkdown}VSTSTR=HospLoc;DateTime;Category;PtIEN{:/}




 Generated on January 13th 2017, 7:11:27 am