---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT16 LIST ALL
# ORWPT16 LIST ALL



Property | Value
--- | ---
Label | LISTALL
Routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LISTALL^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Method Comment | Return a bolus of patient names
Input Parameters | DIR, FROM
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S CNT=44,I=0<br/> I DIR=0 D  ; Forward direction<br/> . F  S FROM=$O(^DPT("B",FROM)) Q:FROM=""  D  Q:I=CNT<br/> . . S IEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT<br/> . . . ; S X=$P($G(^DPT(IEN,0)),"^",9)<br/> . . . ; S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br/> . . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))<br/> . . . S I=I+1 S Y(I)=IEN_"^"_FROM ;_"^"_X ; _"^"_X1  ;"   ("_X_")"<br/> . I $G(Y(CNT))="" S I=I+1,Y(I)=""<br/> I DIR=1 D  ; Reverse direction<br/> . F  S FROM=$O(^DPT("B",FROM),-1) Q:FROM=""  D  Q:I=CNT<br/> . . S IEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT<br/> . . . ; S X=$P($G(^DPT(IEN,0)),"^",9)<br/> . . . ; S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br/> . . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))<br/> . . . S I=I+1 S Y(I)=IEN_"^"_FROM ;_"^"_X ; _"^"_X1  ;"   ("_X_")"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}