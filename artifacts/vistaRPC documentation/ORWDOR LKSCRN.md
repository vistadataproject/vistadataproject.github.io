---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDOR LKSCRN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDOR LKSCRN{:/}
 tag | {::nomarkdown}LKSCRN{:/}
 routine | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Does a lookup similar to GENERIC^ORWU.  Also allows passing of a referenceto a screen in the Order Dialog file to screen to lookup.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a set of entries from xref in REF
 Input Parameters | {::nomarkdown}FROM<br/>DIR<br/>REF<br/>GBL<br/>SCR{:/}
 Lines | ```{::nomarkdown} N I,IEN,CNT,X,Y,D,ORTYPE<br/> S I=0,CNT=44,SCR=$G(SCR)<br/> I $L(SCR) S SCR=$G(^ORD(101.41,+SCR,10,+$P(SCR,":",2),4))<br/> S D=$P(REF,"""",2),ORTYPE="D" ;for OI screen<br/> F  Q:I'<CNT  S FROM=$O(@REF@(FROM),DIR) Q:FROM=""  D<br/> . S IEN=0 F  S IEN=$O(@REF@(FROM,IEN)) Q:'IEN  D<br/> . . ; if screen, set naked ref & Y, then execute screen<br/> . . I $L(SCR) S Y=IEN,X=$P($G(@(GBL_"Y,0)")),U) X SCR Q:'$T<br/> . . S I=I+1,ORLST(I)=IEN_"^"_FROM```{:/}
 Leading comment lines | {::nomarkdown}.Y=returned list, FROM=text to $O from, DIR=$O direction,<br/>REF=subscript indirection global ref including xref,<br/>GBL=standard FM global ref, SCR=reference to screen in 101.41{:/}




 Generated on January 13th 2017, 7:11:27 am