---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDRA32 RAORDITM<br/>
# ORWDRA32 RAORDITM



## Properties

Property | Value
--- | ---
Label | RAORDITM
Routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [RAORDITM^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Method Comment | Return a subset of orderable items
Input Parameters | FROM, DIR, IMGTYP
First Comment | {::nomarkdown}<pre><code> .Return Array, Starting Text, Direction, Cross Reference (S.xxx)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,ORX,DTXT,REQDET,REQAPPR,XREF S I=0,CNT=44<br/> S XREF="S."_$$IMTYPE(IMGTYP)<br/> F  Q:I'<CNT  S FROM=$O(^ORD(101.43,XREF,FROM),DIR) Q:FROM=""  D<br/> . S IEN=0 F  S IEN=$O(^ORD(101.43,XREF,FROM,IEN)) Q:'IEN  D<br/> . . I $$REQDET,$P($G(^ORD(101.43,IEN,"RA")),U,2)="B" Q<br/> . . S ORX=^ORD(101.43,XREF,FROM,IEN)<br/> . . I +$P(ORX,U,3),$P(ORX,U,3)<DT Q<br/> . . S I=I+1<br/> . . I 'ORX S Y(I)=IEN_U_$P(ORX,U,2)_U_$P(ORX,U,2)_U_$$REQAPPR(IEN)<br/> . . E  S Y(I)=IEN_U_$P(ORX,U,2)_" <"_$P(ORX,U,4)_">"_U_$P(ORX,U,4)_U_$$REQAPPR(IEN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}