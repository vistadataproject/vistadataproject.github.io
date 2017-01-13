---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 LOCPICK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 LOCPICK{:/}
 tag | {::nomarkdown}LOCPICK{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return default Location level routing
 Input Parameters | {::nomarkdown}LOC{:/}
 Lines | ```
 S Y=""
 S Y=$$GET^XPAR("LOC.`"_LOC_"^SYS","ORWDPS ROUTING DEFAULT",1,"I")
 I Y="C" S Y="C^in Clinic"
 I Y="M" S Y="M^by Mail"
 I Y="W" S Y="W^at Window"
 I Y="N" S Y=""```




 Generated on January 13th 2017, 6:55:29 am