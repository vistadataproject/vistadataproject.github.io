---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX1 CURSPE
# OREVNTX1 CURSPE



Property | Value
--- | ---
Label | CURSPE
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CURSPE^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return current treating specialty
Input Parameters | PTIFN
Code | {::nomarkdown}<pre><code> Q:'PTIFN<br/> N SPEC S SPEC=$$PT^DGPMOBS(PTIFN),ORY=""<br/> I SPEC'<0 S ORY=$P(SPEC,U,3)_U_$P(SPEC,U,2)_U_$P(SPEC,U) ;name^ien^obs flag</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}