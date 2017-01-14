---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDAL32 SYMPTOMS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 SYMPTOMS{:/}
 tag | {::nomarkdown}SYMPTOMS{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SYMPTOMS^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Return a subset of symptoms
 First comment | {::nomarkdown}.Return Array, Starting Text, Direction{:/}
 Input parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Code | ```  N I,IEN,CNT,X,NAME,SUB S I=0,CNT=44 ;233
 K ^TMP($J,"SIGNS") ;233
 M ^TMP($J,"SIGNS","B")=^GMRD(120.83,"B") ;233
 S SYN="" F  S SYN=$O(^GMRD(120.83,"D",SYN)) Q:SYN=""  S SUB=0 F  S SUB=$O(^GMRD(120.83,"D",SYN,SUB)) Q:'+SUB  D  ;233
 .S NAME=$P(^GMRD(120.83,SUB,0),U) S ^TMP($J,"SIGNS","B",(SYN_$C(9)_"<"_NAME_">"_U_NAME),SUB)="" ;233
 F  Q:I'<CNT  S FROM=$O(^TMP($J,"SIGNS","B",FROM),DIR) Q:FROM=""  D  ;233
 . I FROM="OTHER REACTION" Q  ;Don't send this entry
 . S IEN=0 F  S IEN=$O(^TMP($J,"SIGNS","B",FROM,IEN)) Q:'IEN  D  ;233
 . . I $L($T(SCREEN^XTID)) I $$SCREEN^XTID(120.83,.01,IEN_",") Q  ;233 Is term active
 . . S I=I+1
 . . S Y(I)=IEN_U_FROM```




 Generated on January 14th 2017, 7:26:35 am