---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU1 NAMECVT
# ORWU1 NAMECVT



Property | Value
--- | ---
Label | NAMECVT
Routine | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [NAMECVT^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Method Comment | Returns text name(mixed-case) derived from IEN xref.
Input Parameters | IEN
First Comment | {::nomarkdown}<pre><code> GRE/2002<br/> PKS-12/20/2002 Tag not presently used.<br/> Y=Returned value, IEN=Internal number</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORNAME<br/> S IEN=IEN_","<br/> S ORNAME=$$GET1^DIQ(200,IEN,20.2)<br/> S Y=$$NAMEFMT^XLFNAME(.ORNAME,"F","DcMPC")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}