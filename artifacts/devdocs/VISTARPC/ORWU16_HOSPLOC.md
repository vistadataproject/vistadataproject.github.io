---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU16 HOSPLOC<br/>
# ORWU16 HOSPLOC



## Properties

Property | Value
--- | ---
Label | HOSPLOC
Routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [HOSPLOC^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Method Comment | Return a bolus from the HOSPITAL LOCATION file
Input Parameters | DIR, FROM
First Comment | {::nomarkdown}<pre><code> .Return Array, Direction, Starting Text</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S CNT=44<br/> I DIR=0 D  ; Forward direction<br/> . F I=1:1:CNT S FROM=$O(^SC("B",FROM)) Q:FROM=""  D<br/> . . S IEN=$O(^SC("B",FROM,0))<br/> . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM<br/> . I $G(Y(CNT))="" S Y(I)=""<br/> I DIR=1 D  ; Reverse direction<br/> . F I=1:1:CNT S FROM=$O(^SC("B",FROM),-1) Q:FROM=""  D<br/> . . S IEN=$O(^SC("B",FROM,0))<br/> . . I $$ACTLOC(IEN) S Y(I)=IEN_"^"_FROM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}