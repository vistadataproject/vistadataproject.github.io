---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCOM DETAILS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM DETAILS{:/}
 tag | {::nomarkdown}DETAILS{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns details of COM object when passed in COM IEN.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns Details about a specific COM Object
 Input Parameters | {::nomarkdown}ID{:/}
 Lines | {::nomarkdown} N NODE<br/> S ORY=0<br/> I +ID D<br/> .S NODE=$G(^ORD(101.15,+ID,0))<br/> .I NODE'="",$P(NODE,U,3)'="I" S ORY=ID_U_NODE{:/}




 Generated on January 13th 2017, 7:15:28 am