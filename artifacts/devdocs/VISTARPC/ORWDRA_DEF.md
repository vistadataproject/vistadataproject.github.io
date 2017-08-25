---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDRA DEF<br/>
# ORWDRA DEF

Loads dialog data (lists & defaults) for a radiology order.

## Properties

Property | Value
--- | ---
Label | DEF
MUMPS Implementation | [ORWDRA](http://code.osehra.org/dox/Routine_ORWDRA_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDRA](http://code.osehra.org/dox/Routine_ORWDRA_source.html)
Method Comment | Get dialog data for radiology
Input Parameters | PATID
Code | {::nomarkdown}<pre><code> N ILST,I,X S ILST=0<br/> S LST($$NXT)="~Common Procedures" D COMMPRO<br/> S LST($$NXT)="~Modifiers" D MODIFYR<br/> S LST($$NXT)="~Urgencies" D URGENCY<br/> S LST($$NXT)="~Transport" D TRNSPRT<br/> S LST($$NXT)="~Category" D CATEGRY<br/> S LST($$NXT)="~Submit to" D SUBMIT<br/> S LST($$NXT)="~Ask Submit="_$$GET^XPAR("ALL","RA SUBMIT PROMPT",1,"Q")<br/> S LST($$NXT)="~Last 7 Days" D LAST7</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}