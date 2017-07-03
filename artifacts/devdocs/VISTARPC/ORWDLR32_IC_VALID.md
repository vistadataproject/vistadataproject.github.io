---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR32 IC VALID
# ORWDLR32 IC VALID

Determines whether the suplied time is a valid lab immediate collect time.

Property | Value
--- | ---
Label | ICVALID
Routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIME | LITERAL | 20 | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [ICVALID^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | Is the time a valid immediate collect time?
Input Parameters | ORTIME
Code | {::nomarkdown}<pre><code> S ORTIME=$P(ORTIME,".",1)_"."_$E($P(ORTIME,".",2),1,4)<br/> S ORY=$$VALID^LR7OV4(DUZ(2),ORTIME)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}