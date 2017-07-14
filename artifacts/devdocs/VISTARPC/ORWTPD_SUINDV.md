---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPD SUINDV<br/>
# ORWTPD SUINDV

set user level individual report's time/occ setting

## Properties

Property | Value
--- | ---
Label | SUINDV
Routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SUINDV^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Method Comment | Set user individual time/occ setting
Input Parameters | RPTS, VALUE
First Comment | {::nomarkdown}<pre><code> RPTS format: RPTIen^RPTIen^RPTIen such as 1^2^3</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I $L(RPTS)=0 Q<br/> N ORERR,RPTID,P1,P7 S ORERR=0<br/> S (P1,P7)=""<br/> F I=1:1:$L(RPTS,"^") S RPTID=$P(RPTS,U,I) D<br/> . S P1=$P($G(^ORD(101.24,RPTID,0)),U),P7=$P($G(^(0)),U,7)<br/> . I "02345"[P7,(P1'="ORRP IMAGING") D DEL^XPAR("USR.`"_DUZ,"ORWRP TIME/OCC LIMITS INDV",RPTID,.ORERR) Q<br/> . D EN^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS INDV",RPTID,VALUE,.ORERR)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}