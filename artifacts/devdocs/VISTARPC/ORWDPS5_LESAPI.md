---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS5 LESAPI
# ORWDPS5 LESAPI



Property | Value
--- | ---
Label | LESAPI
Routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [LESAPI^ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
Method Comment | Call LES Api from inside CPRS for validating changed lab order
Input Parameters | FLDS
First Comment | {::nomarkdown}<pre><code> FLDS = DFN^TEST^ORL^ORNP^ORDT<br/> DFN:  Patient DFN (pointer to #2)<br/> TEST: Lab Test IFN (pointer to #101.43)<br/> ORL:  Patient Location (pointer to #44)<br/> ORNP: Provider IEN (pointer to #200)<br/> ORDT: Collection date/time (fileman format)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DFNL,TESTL,ORLOCL,ORNPL,ORDTL,HAVELES<br/> S (DFNL,TESTL,ORLOCL,ORNPL,ORDTL,HAVELES)=""<br/> S DFNL=$P(FLDS,U,1)<br/> S TESTL=$P(FLDS,U,2)<br/> S ORLOCL=$P(FLDS,U,3)<br/> S ORNPL=$P(FLDS,U,4)<br/> S ORDTL=$P(FLDS,U,5)<br/> S HAVELES=$TEXT(COM^AVJLES)<br/> I $L(HAVELES) D COM^AVJLES(.ORY,DFNL,TESTL,ORLOCL,ORNPL,ORDTL)<br/> S ORY(1)=""</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}