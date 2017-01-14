---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDRA32 RAORDITM 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 RAORDITM{:/}
 tag | {::nomarkdown}RAORDITM{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RAORDITM^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | Return a subset of orderable items
 First comment | {::nomarkdown}.Return Array, Starting Text, Direction, Cross Reference (S.xxx){:/}
 Input parameters | {::nomarkdown}FROM<br/>DIR<br/>IMGTYP{:/}
 Code | ```  N I,IEN,CNT,ORX,DTXT,REQDET,REQAPPR,XREF S I=0,CNT=44
 S XREF="S."_$$IMTYPE(IMGTYP)
 F  Q:I'<CNT  S FROM=$O(^ORD(101.43,XREF,FROM),DIR) Q:FROM=""  D
 . S IEN=0 F  S IEN=$O(^ORD(101.43,XREF,FROM,IEN)) Q:'IEN  D
 . . I $$REQDET,$P($G(^ORD(101.43,IEN,"RA")),U,2)="B" Q
 . . S ORX=^ORD(101.43,XREF,FROM,IEN)
 . . I +$P(ORX,U,3),$P(ORX,U,3)<DT Q
 . . S I=I+1
 . . I 'ORX S Y(I)=IEN_U_$P(ORX,U,2)_U_$P(ORX,U,2)_U_$$REQAPPR(IEN)
 . . E  S Y(I)=IEN_U_$P(ORX,U,2)_" <"_$P(ORX,U,4)_">"_U_$P(ORX,U,4)_U_$$REQAPPR(IEN)```




 Generated on January 14th 2017, 7:26:35 am