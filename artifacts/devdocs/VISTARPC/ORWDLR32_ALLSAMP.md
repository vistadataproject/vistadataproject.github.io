---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR32 ALLSAMP<br/>
# ORWDLR32 ALLSAMP

Returns all collection samples in the format:   n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName

## Properties

Property | Value
--- | ---
Label | ALLSAMP
Routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLSAMP^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Method Comment | procedure
First Comment | {::nomarkdown}<pre><code> returns all collection samples<br/> n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N SMP,SPC,ILST,IEN,X,X0,A,%,INC<br/> S ILST=0,LST($$NXT)="~CollSamp"<br/> S SMP="" F  S SMP=$O(^LAB(62,"B",SMP)) Q:SMP=""  D<br/> . S IEN=0 F  S IEN=$O(^LAB(62,"B",SMP,IEN)) Q:'IEN  D<br/> . . S INC=1 I $D(^LAB(62,IEN,64.91)) D  I 'INC Q<br/> . . . S A=^LAB(62,IEN,64.91)<br/> . . . S B=$P(A,"^") D NOW^%DTC I B]"",B'>$P(%,".") S INC=0 Q<br/> . . S X0=^LAB(62,IEN,0)<br/> . . S X="i"_U_IEN_U_SMP_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)<br/> . . I $P(X0,U,2) D<br/> . . . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)<br/> . . . S SPC($P(X,U,4))=$P(X,U,10)<br/> . . S LST($$NXT)=X<br/> S LST($$NXT)="~Specimens"<br/> S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}