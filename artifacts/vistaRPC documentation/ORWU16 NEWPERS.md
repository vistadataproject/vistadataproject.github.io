---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU16 NEWPERS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 NEWPERS{:/}
 tag | {::nomarkdown}NEWPERS{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return a bolus from the NEW PERSON file
 Input Parameters | {::nomarkdown}DIR<br/>FROM<br/>KEY{:/}
 Lines | ```
 N I,IEN,CNT S CNT=44,KEY=$G(KEY)
 I DIR=0 D  ; Forward direction
 . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM)) Q:FROM=""  D
 . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q
 . . S Y(I)=IEN_"^"_FROM
 . I $G(Y(CNT))="" S Y(I)=""
 I DIR=1 D  ; Reverse direction
 . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM),-1) Q:FROM=""  D
 . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q
 . . S Y(I)=IEN_"^"_FROM```
 Leading comment lines | {::nomarkdown}.Return Array, Direction, Starting Text{:/}




 Generated on January 13th 2017, 6:55:29 am