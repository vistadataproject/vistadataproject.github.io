---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS2 SCHREQ<br/>
# ORWDPS2 SCHREQ



## Properties

Property | Value
--- | ---
Label | SCHREQ
Routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SCHREQ^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Method Comment | return 1 if schedule is required
Input Parameters | OI, RTE, DRG
First Comment | {::nomarkdown}<pre><code> OI=orderable item, RTE=ptr route, DRG=ptr dispense drug</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S VAL=1<br/> Q:'$G(OI)  Q:'$G(RTE)<br/> S VAL=$$SCHREQ^PSJORPOE(RTE,OI,+$G(DRG))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}