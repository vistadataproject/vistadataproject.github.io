---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB STATALOW<br/>
# ORWDXVB STATALOW

Check to see if user is allowed to order STAT orders through VBECS.Checks users with parameter: OR VBECS STAT USER

## Properties

Property | Value
--- | ---
Label | STATALOW
MUMPS Implementation | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [STATALOW^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Method Comment | Allow stat for ORES ORELSE users
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S OROOT=$D(^XUSEC("ORES",DUZ))!($D(^XUSEC("ORELSE",DUZ)))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}