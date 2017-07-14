---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS1 DFLTSPLY<br/>
# ORWDPS1 DFLTSPLY



## Properties

Property | Value
--- | ---
Label | DFLTSPLY
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DFLTSPLY^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return days supply given quantity
Input Parameters | UPD, SCH, PAT, DRG, OI
First Comment | {::nomarkdown}<pre><code> VAL: default days supply</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORWX,I,PSOI,TPKG<br/> S ORWX("PATIENT")=PAT<br/> I DRG S ORWX("DRUG")=DRG<br/> I $D(OI) D<br/> . S TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2) Q:TPKG'["PS"<br/> . S PSOI=+TPKG Q:PSOI'>0<br/> . S ORWX("OI")=PSOI<br/> F I=1:1:$L(UPD,U)-1 D<br/> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br/> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br/> D DSUP^PSOSIGDS(.ORWX)<br/> S VAL=$G(ORWX("DAYS SUPPLY"))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}