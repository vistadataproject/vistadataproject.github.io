---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 LIST ALL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 LIST ALL{:/}
 tag | {::nomarkdown}LISTALL{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return a bolus of patient names
 Input Parameters | {::nomarkdown}DIR<br/>FROM{:/}
 Lines | ```
 N I,IEN,CNT S CNT=44,I=0
 I DIR=0 D  ; Forward direction
 . F  S FROM=$O(^DPT("B",FROM)) Q:FROM=""  D  Q:I=CNT
 . . S IEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT
 . . . ; S X=$P($G(^DPT(IEN,0)),"^",9)
 . . . ; S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)
 . . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))
 . . . S I=I+1 S Y(I)=IEN_"^"_FROM ;_"^"_X ; _"^"_X1  ;"   ("_X_")"
 . I $G(Y(CNT))="" S I=I+1,Y(I)=""
 I DIR=1 D  ; Reverse direction
 . F  S FROM=$O(^DPT("B",FROM),-1) Q:FROM=""  D  Q:I=CNT
 . . S IEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT
 . . . ; S X=$P($G(^DPT(IEN,0)),"^",9)
 . . . ; S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)
 . . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))
 . . . S I=I+1 S Y(I)=IEN_"^"_FROM ;_"^"_X ; _"^"_X1  ;"   ("_X_")"```




 Generated on January 13th 2017, 6:55:28 am