---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU16 NEWPERS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 NEWPERS{:/}
 tag | {::nomarkdown}NEWPERS{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NEWPERS^[ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 Method comment | Return a bolus from the NEW PERSON file
 First comment | {::nomarkdown}.Return Array, Direction, Starting Text{:/}
 Input parameters | {::nomarkdown}DIR<br/>FROM<br/>KEY{:/}
 Code | ```  N I,IEN,CNT S CNT=44,KEY=$G(KEY)
 I DIR=0 D  ; Forward direction
 . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM)) Q:FROM=""  D
 . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q
 . . S Y(I)=IEN_"^"_FROM
 . I $G(Y(CNT))="" S Y(I)=""
 I DIR=1 D  ; Reverse direction
 . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM),-1) Q:FROM=""  D
 . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q
 . . S Y(I)=IEN_"^"_FROM```




 Generated on January 14th 2017, 7:26:35 am