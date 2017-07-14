---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR32 ONE SAMPLE<br/>
# ORWDLR32 ONE SAMPLE

Returns data for one collection sample in the format:     n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName

## Properties

Property | Value
--- | ---
Label | ONESAMP
Routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
COLL SAMP IEN | LITERAL | 32 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ONESAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Method Comment | Return data for one colelction sample
Input Parameters | IEN
First Comment | {::nomarkdown}<pre><code> n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N SPC,ILST,X,X0<br/> Q:+$G(IEN)=0<br/> S ILST=0,LST($$NXT)="~CollSamp"<br/> S X0=^LAB(62,IEN,0)<br/> S X="i1"_U_IEN_U_$P(X0,U,1)_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)<br/> I $P(X0,U,2) D<br/> . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)<br/> . S SPC($P(X,U,4))=$P(X,U,10)<br/> S LST($$NXT)=X<br/> S LST($$NXT)="~Specimens"<br/> S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}