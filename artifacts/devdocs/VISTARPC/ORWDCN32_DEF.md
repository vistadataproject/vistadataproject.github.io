---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDCN32 DEF<br/>
# ORWDCN32 DEF

Load dialog data (lists & defaults) for a consult order. (32-BIT)

## Properties

Property | Value
--- | ---
Label | DEF
Routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Method Comment | load consult info
Input Parameters | WHY
Code | {::nomarkdown}<pre><code> N ILST,NAM,IEN,X<br/> S ILST=0<br/> S LST($$NXT)="~ShortList" D SHORT<br/> I WHY="C" D<br/> . S LST($$NXT)="~Inpt Cslt Urgencies" D INCURG<br/> I WHY="P" D<br/> . S LST($$NXT)="~Inpt Proc Urgencies" D INPURG<br/> S LST($$NXT)="~Outpt Urgencies" D OUTURG<br/> S LST($$NXT)="~Inpt Place" D INPLACE<br/> S LST($$NXT)="~Outpt Place" D OUTPLACE<br/> S LST($$NXT)="~Clin Ind Date" D CID</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}