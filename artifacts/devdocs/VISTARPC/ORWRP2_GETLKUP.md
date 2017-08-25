---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 GETLKUP<br/>
# ORWRP2 GETLKUP

This gets the last Adhoc Health Summary lookup used by a user in CPRS.

## Properties

Property | Value
--- | ---
Label | GETLKUP
MUMPS Implementation | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETLKUP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get Adhoc lookup selection
Code | {::nomarkdown}<pre><code> S ORY=$$GET^XPAR("ALL","ORWRP ADHOC LOOKUP",1,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}