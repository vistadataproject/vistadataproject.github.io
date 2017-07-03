---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWLRR MICRO
# ORWLRR MICRO



Property | Value
--- | ---
Label | MICRO
Routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
Return Type | GLOBAL ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [MICRO^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
Method Comment | Micro Report RPC
Input Parameters | DFN, DATE1, DATE2
Code | {::nomarkdown}<pre><code> N ROOT<br/> S ROOT=$$SET()<br/> I $$REMOTE(.DFN,.ROOT) D MICRO^LR7OGM(.ORY,DFN,DATE1,DATE2)<br/> D CLEAN(.ORY,.ROOT)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}