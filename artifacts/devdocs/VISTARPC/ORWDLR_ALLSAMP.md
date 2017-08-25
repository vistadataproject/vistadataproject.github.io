---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR ALLSAMP<br/>
# ORWDLR ALLSAMP

Returns a list of collection samples for a lab order.

## Properties

Property | Value
--- | ---
Label | ALLSAMP
MUMPS Implementation | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLSAMP^ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
Method Comment | procedure
First Comment | {::nomarkdown}<pre><code> returns all collection samples<br/> n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N SMP,SPC,ILST,IEN,X,X0<br/> S ILST=0,LST($$NXT)="~CollSamp"<br/> S SMP="" F  S SMP=$O(^LAB(62,"B",SMP)) Q:SMP=""  D<br/> . S IEN=0 F  S IEN=$O(^LAB(62,"B",SMP,IEN)) Q:'IEN  D<br/> . . S X0=^LAB(62,IEN,0)<br/> . . S X="i"_U_IEN_U_SMP_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)<br/> . . I $P(X0,U,2) D<br/> . . . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)<br/> . . . S SPC($P(X,U,4))=$P(X,U,10)<br/> . . S LST($$NXT)=X<br/> S LST($$NXT)="~Specimens"<br/> S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}