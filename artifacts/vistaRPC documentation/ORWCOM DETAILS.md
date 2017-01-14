---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWCOM DETAILS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM DETAILS{:/}
 tag | {::nomarkdown}DETAILS{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns details of COM object when passed in COM IEN.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAILS^[ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 Method comment | Returns Details about a specific COM Object
 Input parameters | {::nomarkdown}ID{:/}
 Code | ```  N NODE
 S ORY=0
 I +ID D
 .S NODE=$G(^ORD(101.15,+ID,0))
 .I NODE'="",$P(NODE,U,3)'="I" S ORY=ID_U_NODE```




 Generated on January 14th 2017, 7:26:35 am