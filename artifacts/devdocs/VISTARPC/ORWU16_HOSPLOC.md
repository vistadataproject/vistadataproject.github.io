---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU16 HOSPLOC
# ORWU16 HOSPLOC



Property | Value
--- | ---
Label | HOSPLOC
Routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [HOSPLOC^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Method Comment | Return a bolus from the HOSPITAL LOCATION file
Input Parameters | DIR, FROM
First Comment | {::nomarkdown}<pre><code> .Return Array, Direction, Starting Text</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S CNT=44<br/> I DIR=0 D  ; Forward direction<br/> . F I=1:1:CNT S FROM=$O(^SC("B",FROM)) Q:FROM=""  D<br/> . . S IEN=$O(^SC("B",FROM,0))<br/> . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM<br/> . I $G(Y(CNT))="" S Y(I)=""<br/> I DIR=1 D  ; Reverse direction<br/> . F I=1:1:CNT S FROM=$O(^SC("B",FROM),-1) Q:FROM=""  D<br/> . . S IEN=$O(^SC("B",FROM,0))<br/> . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}