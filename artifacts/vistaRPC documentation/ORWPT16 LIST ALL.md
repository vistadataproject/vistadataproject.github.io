---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 LIST ALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 LIST ALL{:/}
 tag | {::nomarkdown}LISTALL{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LISTALL^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | Return a bolus of patient names
 Input parameters | {::nomarkdown}DIR<br>FROM{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S CNT=44,I=0<br> I DIR=0 D  ; Forward direction<br> . F  S FROM=$O(^DPT("B",FROM)) Q:FROM=""  D  Q:I=CNT<br> . . S IEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT<br> . . . ; S X=$P($G(^DPT(IEN,0)),"^",9)<br> . . . ; S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br> . . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))<br> . . . S I=I+1 S Y(I)=IEN_"^"_FROM ;_"^"_X ; _"^"_X1  ;"   ("_X_")"<br> . I $G(Y(CNT))="" S I=I+1,Y(I)=""<br> I DIR=1 D  ; Reverse direction<br> . F  S FROM=$O(^DPT("B",FROM),-1) Q:FROM=""  D  Q:I=CNT<br> . . S IEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT<br> . . . ; S X=$P($G(^DPT(IEN,0)),"^",9)<br> . . . ; S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br> . . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))<br> . . . S I=I+1 S Y(I)=IEN_"^"_FROM ;_"^"_X ; _"^"_X1  ;"   ("_X_")"{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}