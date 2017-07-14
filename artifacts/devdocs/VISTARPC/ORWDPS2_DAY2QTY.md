---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS2 DAY2QTY<br/>
# ORWDPS2 DAY2QTY



## Properties

Property | Value
--- | ---
Label | DAY2QTY
Routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DAY2QTY^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Method Comment | return qty for days supply
Input Parameters | DAY, UPD, SCH, DUR, PAT, DRG
First Comment | {::nomarkdown}<pre><code> VAL: quantity</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORWX,I,X,ADUR,ADURNM<br/> S ORWX("DAYS SUPPLY")=DAY<br/> S ORWX("PATIENT")=PAT<br/> I DRG S ORWX("DRUG")=DRG<br/> F I=1:1:$L(UPD,U)-1 D<br/> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br/> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br/> . S ADUR=$P(DUR,U,I),ADURNM=$P($P(ADUR," ",2),"~")<br/> . S:ADURNM="MONTHS" X=+ADUR_"L"<br/> . S:ADURNM'="MONTHS" X=+ADUR_$E($P(ADUR," ",2))<br/> . I $L(X) S ORWX("DURATION",I)=X<br/> . S X=$E($P(ADUR,"~",2))<br/> . I $L(X) S ORWX("CONJUNCTION",I)=X<br/> D QTYX^PSOSIG(.ORWX)<br/> S VAL=$G(ORWX("QTY"))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}