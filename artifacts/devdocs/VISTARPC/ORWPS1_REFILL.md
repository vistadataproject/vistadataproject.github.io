---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPS1 REFILL<br/>
# ORWPS1 REFILL

RPC to submit a request for a refill.

## Properties

Property | Value
--- | ---
Label | REFILL
Routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [REFILL^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Method Comment | Refill Request
Input Parameters | ORDERID, REFLOC, ORVP, ORNP, ORL
Code | {::nomarkdown}<pre><code> S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br/> D REF^ORMBLDPS(ORDERID,REFLOC)<br/> S Y=""<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}