---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 RAORDITM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 RAORDITM{:/}
 tag | {::nomarkdown}RAORDITM{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return a subset of orderable items
 Input Parameters | {::nomarkdown}FROM<br/>DIR<br/>IMGTYP{:/}
 Lines | ```{::nomarkdown} N I,IEN,CNT,ORX,DTXT,REQDET,REQAPPR,XREF S I=0,CNT=44<br/> S XREF="S."_$$IMTYPE(IMGTYP)<br/> F  Q:I'<CNT  S FROM=$O(^ORD(101.43,XREF,FROM),DIR) Q:FROM=""  D<br/> . S IEN=0 F  S IEN=$O(^ORD(101.43,XREF,FROM,IEN)) Q:'IEN  D<br/> . . I $$REQDET,$P($G(^ORD(101.43,IEN,"RA")),U,2)="B" Q<br/> . . S ORX=^ORD(101.43,XREF,FROM,IEN)<br/> . . I +$P(ORX,U,3),$P(ORX,U,3)<DT Q<br/> . . S I=I+1<br/> . . I 'ORX S Y(I)=IEN_U_$P(ORX,U,2)_U_$P(ORX,U,2)_U_$$REQAPPR(IEN)<br/> . . E  S Y(I)=IEN_U_$P(ORX,U,2)_" <"_$P(ORX,U,4)_">"_U_$P(ORX,U,4)_U_$$REQAPPR(IEN)```{:/}
 Leading comment lines | {::nomarkdown}.Return Array, Starting Text, Direction, Cross Reference (S.xxx){:/}




 Generated on January 13th 2017, 7:11:26 am