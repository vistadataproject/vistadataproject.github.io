---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORECS01 VSITID 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORECS01 VSITID{:/}
 tag | {::nomarkdown}VSITID{:/}
 routine | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VSITID^[ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
 Method comment | Return Visit IEN ptr to #9000010
 First comment | {::nomarkdown}VSTSTR=HospLoc;DateTime;Category;PtIEN{:/}
 Input parameters | {::nomarkdown}VSTSTR{:/}
 Code | ```  N DTREF,PTID
 S ORY=0
 S DTREF=9999999-$P($P(VSTSTR,";",2),".")_"."_$P($P(VSTSTR,";",2),".",2)
 S PTID=+$P(VSTSTR,";",4)
 S:$D(^AUPNVSIT("AA",PTID,DTREF)) ORY=$O(^(DTREF,0))```




 Generated on January 14th 2017, 7:26:35 am