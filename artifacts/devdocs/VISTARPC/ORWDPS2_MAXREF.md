---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS2 MAXREF<br/>
# ORWDPS2 MAXREF



## Properties

Property | Value
--- | ---
Label | MAXREF
Routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [MAXREF^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Method Comment | return the maximum number of refills
Input Parameters | PAT, DRG, SUP, OI, OUT
First Comment | {::nomarkdown}<pre><code> PAT=Patient DFN, DRG=ptr50, SUP=days supply, OI=orderable item<br/> VAL: maximum refills allowed</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORWX<br/> S ORWX("PATIENT")=PAT<br/> I $G(DRG) S ORWX("DRUG")=+DRG<br/> I $G(SUP) S ORWX("DAYS SUPPLY")=SUP<br/> I $G(OI)  S ORWX("ITEM")=+$P(^ORD(101.43,+OI,0),U,2)<br/> I $G(OUT) S ORWX("DISCHARGE")=1<br/> D MAX^PSOSIGDS(.ORWX)<br/> S VAL=$G(ORWX("MAX"))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}