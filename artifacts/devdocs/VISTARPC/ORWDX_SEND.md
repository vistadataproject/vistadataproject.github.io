---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX SEND<br/>
# ORWDX SEND

RPC to sign a list of orders with input as follows:        DFN=Patient        ORNP=Provider        ORL=Location        ES=Encrypted ES code         ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order

## Properties

Property | Value
--- | ---
Label | SEND
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SEND^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Sign
Input Parameters | DFN, ORNP, ORL, ES, ORWREC
First Comment | {::nomarkdown}<pre><code> DFN=Patient, ORNP=Provider, ORL=Location, ES=Encrypted ES code<br/> ORWREC(n)=ORIFN;Action^Signature Sts^Release Sts^Nature of Order</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}