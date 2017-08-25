---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE I10IMPDT<br/>
# ORWPCE I10IMPDT

This RPC returns the ICD-10 implementation date in FM Date/Time format.

## Properties

Property | Value
--- | ---
Label | I10IMPDT
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [I10IMPDT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | Get ICD-10 Implementation Date
Code | {::nomarkdown}<pre><code> S RESULT=""<br/> G:'$L($T(IMPDATE^LEXU)) I10IMPX<br/> S RESULT=$$IMPDATE^LEXU("10D")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}