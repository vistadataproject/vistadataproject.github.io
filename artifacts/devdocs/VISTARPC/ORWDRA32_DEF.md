---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDRA32 DEF<br/>
# ORWDRA32 DEF

Loads dialog data (lists & defaults) for a radiology order.

## Properties

Property | Value
--- | ---
Label | DEF
MUMPS Implementation | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Method Comment | Get dialog data for radiology
Input Parameters | PATID, EVTDIV, IMGTYP
Code | {::nomarkdown}<pre><code> N ILST,I,ORX S ILST=0<br/> S LST($$NXT)="~ShortList"  D SHORT<br/> S IMGTYP=$$IMTYPE(IMGTYP)<br/> S LST($$NXT)="~Common Procedures" D COMMPRO<br/> S LST($$NXT)="~Modifiers" D MODIFYR<br/> S LST($$NXT)="~Urgencies" D URGENCY<br/> S LST($$NXT)="~Transport" D TRNSPRT<br/> S LST($$NXT)="~Category" D CATEGRY<br/> S LST($$NXT)="~Submit to" D SUBMIT<br/> S LST($$NXT)="~Last 7 Days" D LAST7</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}