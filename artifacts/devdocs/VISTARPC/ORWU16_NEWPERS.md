---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU16 NEWPERS<br/>
# ORWU16 NEWPERS



## Properties

Property | Value
--- | ---
Label | NEWPERS
Routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [NEWPERS^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Method Comment | Return a bolus from the NEW PERSON file
Input Parameters | DIR, FROM, KEY
First Comment | {::nomarkdown}<pre><code> .Return Array, Direction, Starting Text</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S CNT=44,KEY=$G(KEY)<br/> I DIR=0 D  ; Forward direction<br/> . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM)) Q:FROM=""  D<br/> . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q<br/> . . S Y(I)=IEN_"^"_FROM<br/> . I $G(Y(CNT))="" S Y(I)=""<br/> I DIR=1 D  ; Reverse direction<br/> . F I=1:1:CNT S FROM=$O(^VA(200,"B",FROM),-1) Q:FROM=""  D<br/> . . S IEN=$O(^VA(200,"B",FROM,0)) I $L(KEY),'$D(^XUSEC(KEY,IEN)) Q<br/> . . S Y(I)=IEN_"^"_FROM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}