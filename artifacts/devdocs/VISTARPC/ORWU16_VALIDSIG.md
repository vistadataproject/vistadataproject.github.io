---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU16 VALIDSIG
# ORWU16 VALIDSIG



Property | Value
--- | ---
Label | VALIDSIG
Routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [VALIDSIG^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Method Comment | procedure
Input Parameters | X
Code | {::nomarkdown}<pre><code> S X=$$DECRYP^XUSRB1(X),ESOK=0<br/> D HASH^XUSHSHP<br/> I X=$P($G(^VA(200,+DUZ,20)),U,4) S ESOK=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}