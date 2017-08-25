---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDRA32 RADSRC<br/>
# ORWDRA32 RADSRC



## Properties

Property | Value
--- | ---
Label | RADSRC
MUMPS Implementation | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [RADSRC^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Method Comment | return list of available contract/sharing/research sources
Input Parameters | SRCTYPE
Code | {::nomarkdown}<pre><code> S ORX=0<br/> F I=1:1 S ORX=$O(^DIC(34,ORX)) Q:+ORX=0  D<br/> . Q:($P(^DIC(34,ORX,0),U,2)'=SRCTYPE)<br/> . I $D(^DIC(34,ORX,"I")),(^DIC(34,ORX,"I")<$$NOW^XLFDT) Q<br/> . S Y(I)=ORX_U_$P(^DIC(34,ORX,0),U,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}