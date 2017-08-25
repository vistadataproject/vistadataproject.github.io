---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD2 MANUAL<br/>
# ORWD2 MANUAL

Returns device information for manual prints done via CPRS GUI.

## Properties

Property | Value
--- | ---
Label | MANUAL
MUMPS Implementation | [ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [MANUAL^ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
Method Comment | return device info for manual prints
Input Parameters | LOC, ORDERS
Code | {::nomarkdown}<pre><code> N DOCHT,DOLBL,DOREQ,DOWRK,ORDERID,I<br/> N PRMTCHT,PRMTLBL,PRMTREQ,PRMTWRK  ; (so undefined for DEFDEV call)<br/> S (DOCHT,DOLBL,DOREQ,DOWRK,I,J)=0,LOC=+LOC_";SC("<br/> N BBPKG S BBPKG=+$O(^DIC(9.4,"B","VBECS",0))<br/> D INSRTBB(.ORDERS) ; insert any blood bank child lab orders into ORDERS array<br/> F  S I=$O(ORDERS(I)) Q:'I  D  Q:DOCHT&DOLBL&DOREQ&DOWRK<br/> . S ORDERID=$P(ORDERS(I),U)<br/> . I $$HASFMTC,$$NOTBB(+ORDERS(I)) S DOCHT=1<br/> . I $$HASFMTL S DOLBL=1<br/> . I $$HASFMTR S DOREQ=1<br/> . I $$HASFMTW,$$NOTBB(+ORDERS(I)) S DOWRK=1<br/> S REC=$$DEFDEV</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}