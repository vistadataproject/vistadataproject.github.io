---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU16 HOSPLOC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 HOSPLOC{:/}
 tag | {::nomarkdown}HOSPLOC{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HOSPLOC^[ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 Method comment | Return a bolus from the HOSPITAL LOCATION file
 First comment | {::nomarkdown}.Return Array, Direction, Starting Text{:/}
 Input parameters | {::nomarkdown}DIR<br/>FROM{:/}
 Code | ```  N I,IEN,CNT S CNT=44
 I DIR=0 D  ; Forward direction
 . F I=1:1:CNT S FROM=$O(^SC("B",FROM)) Q:FROM=""  D
 . . S IEN=$O(^SC("B",FROM,0))
 . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM
 . I $G(Y(CNT))="" S Y(I)=""
 I DIR=1 D  ; Reverse direction
 . F I=1:1:CNT S FROM=$O(^SC("B",FROM),-1) Q:FROM=""  D
 . . S IEN=$O(^SC("B",FROM,0))
 . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM```




 Generated on January 14th 2017, 7:26:35 am