---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDRA32 RADSRC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 RADSRC{:/}
 tag | {::nomarkdown}RADSRC{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RADSRC^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | return list of available contract/sharing/research sources
 Input parameters | {::nomarkdown}SRCTYPE{:/}
 Code | ```  S ORX=0
 F I=1:1 S ORX=$O(^DIC(34,ORX)) Q:+ORX=0  D
 . Q:($P(^DIC(34,ORX,0),U,2)'=SRCTYPE)
 . I $D(^DIC(34,ORX,"I")),(^DIC(34,ORX,"I")<$$NOW^XLFDT) Q
 . S Y(I)=ORX_U_$P(^DIC(34,ORX,0),U,1)```




 Generated on January 14th 2017, 7:26:35 am