---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU1 NAMECVT<br/>
# ORWU1 NAMECVT



## Properties

Property | Value
--- | ---
Label | NAMECVT
MUMPS Implementation | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [NAMECVT^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Method Comment | Returns text name(mixed-case) derived from IEN xref.
Input Parameters | IEN
First Comment | {::nomarkdown}<pre><code> GRE/2002<br/> PKS-12/20/2002 Tag not presently used.<br/> Y=Returned value, IEN=Internal number</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORNAME<br/> S IEN=IEN_","<br/> S ORNAME=$$GET1^DIQ(200,IEN,20.2)<br/> S Y=$$NAMEFMT^XLFNAME(.ORNAME,"F","DcMPC")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}