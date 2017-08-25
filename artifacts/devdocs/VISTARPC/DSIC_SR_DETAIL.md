---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC SR DETAIL<br/>
# DSIC SR DETAIL

For a surgical case, this returns the operation report, anesthesia report, nurse's report, and procedure report.  Which reports are returned depends upon the input paramter FLAG value.  It defaults to Op report and Anesthesia report.

## Properties

Property | Value
--- | ---
Label | DETAILSR
MUMPS Implementation | [DSICSRPT](http://code.osehra.org/dox/Routine_DSICSRPT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSISRTN | LITERAL | 20 | true | This is the internal file number from file 130, i.e., CASE#
FLAG | LITERAL | 4 | true | Optional parameter - string of characters indicating which reports to return:  FLAG[&quot;O&quot; - return Operation Report       &quot;A&quot; - return Anesthesia Report       &quot;N&quot; - return Nurse&#x27;s Report       &quot;P&quot; - return Procedure Report (NON-OR) Default to FLAG&#x3D;&quot;OA&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}