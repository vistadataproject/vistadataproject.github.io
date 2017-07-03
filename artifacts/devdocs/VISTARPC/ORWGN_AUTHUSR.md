---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWGN AUTHUSR
# ORWGN AUTHUSR



Property | Value
--- | ---
Label | AUTHUSR
Routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [AUTHUSR^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Method Comment | Does user has permission to access GN?
Code | {::nomarkdown}<pre><code> S ORY=0<br/> I $D(^XUSEC("OR GN ACCESS",DUZ)) S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}