---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT16 APPTLST<br/>
# ORWPT16 APPTLST



## Properties

Property | Value
--- | ---
Label | APPTLST
Routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [APPTLST^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Method Comment | procedure
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> Return a list of appointments</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,ILST S ILST=0<br/> D GETAPPT^TIUVSIT(DFN)<br/> S I=0 F  S I=$O(^TMP("TIUVNI",$J,I)) Q:'I  D<br/> . S ILST=ILST+1<br/> . S LST(ILST)=$P(^TMP("TIUVNI",$J,I),U,1,2)_U_$P(^TMP("TIUVN",$J,I),U,1,2)<br/> K ^TMP("TIUVN",$J),^TMP("TIUVNI",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}