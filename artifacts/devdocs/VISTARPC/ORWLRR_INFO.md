---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWLRR INFO
# ORWLRR INFO

Return lab test description information.

Property | Value
--- | ---
Label | INFO
Routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [INFO^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
Method Comment | Get Lab test description info
Input Parameters | ORTEST
Code | {::nomarkdown}<pre><code> I '$L($T(ONE^LR7OR4)) S ORY(1)="Missing lab API (part of patch LR*5.2*256)" Q<br/> D ONE^LR7OR4(.ORY,.ORTEST)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}