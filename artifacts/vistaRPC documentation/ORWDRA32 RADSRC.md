---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 RADSRC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 RADSRC{:/}
 tag | {::nomarkdown}RADSRC{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RADSRC^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | return list of available contract/sharing/research sources
 Input parameters | {::nomarkdown}SRCTYPE{:/}
 Code | {::nomarkdown}  S ORX=0<br> F I=1:1 S ORX=$O(^DIC(34,ORX)) Q:+ORX=0  D<br> . Q:($P(^DIC(34,ORX,0),U,2)'=SRCTYPE)<br> . I $D(^DIC(34,ORX,"I")),(^DIC(34,ORX,"I")<$$NOW^XLFDT) Q<br> . S Y(I)=ORX_U_$P(^DIC(34,ORX,0),U,1){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}