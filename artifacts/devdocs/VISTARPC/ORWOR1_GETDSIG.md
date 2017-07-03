---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWOR1 GETDSIG
# ORWOR1 GETDSIG

Returns the digital signature of an existing order.

Property | Value
--- | ---
Label | GETDSIG
Routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDSIG^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Method Comment | Get Digital Signature
Input Parameters | ORDER
Code | {::nomarkdown}<pre><code> N IFN,ACTION<br/> S SIG=0,IFN=+ORDER,ACTION=$P(ORDER,";",2)<br/> I +$P($G(^OR(100,+IFN,8,+ACTION,2)),U,3) S SIG=$P(^(2),"^",3)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}