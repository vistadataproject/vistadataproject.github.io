---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX1 DFLTEVT
# OREVNTX1 DFLTEVT



Property | Value
--- | ---
Label | DFLTEVT
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [DFLTEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return default release event based on provider IFN
Input Parameters | PVIFN
Code | {::nomarkdown}<pre><code> N CMEVTLST,IDX<br/> S CMEVTLST="",IDX=0<br/> D GETLST^OREV3(.CMEVTLST)<br/> F  S IDX=$O(CMEVTLST(IDX)) Q:'IDX  D<br/> . I $P($G(CMEVTLST(IDX)),U,2) S ORY=$P($G(CMEVTLST(IDX)),U) Q</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}