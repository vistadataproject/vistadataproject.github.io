---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCOM GETOBJS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM GETOBJS{:/}
 tag | {::nomarkdown}GETOBJS{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of all active COM objects{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns list of all active COM objects
 Lines | ```
 N I,J,IDX,NODE
 S I="",IDX=0
 F  S I=$O(^ORD(101.15,"B",I)) Q:I=""  D
 .S J=$O(^ORD(101.15,"B",I,0)) Q:'+J
 .S NODE=$G(^ORD(101.15,J,0))
 .I $P(NODE,U,3)'="I" D
 ..S IDX=IDX+1
 ..S ORY(IDX)=J_U_NODE
```




 Generated on January 13th 2017, 6:55:29 am