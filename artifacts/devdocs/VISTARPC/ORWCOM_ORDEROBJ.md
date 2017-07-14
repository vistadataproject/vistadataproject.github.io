---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCOM ORDEROBJ<br/>
# ORWCOM ORDEROBJ

Returns COM Objects for order accept

## Properties

Property | Value
--- | ---
Label | ORDEROBJ
Routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORGRP | LITERAL |  |  | Display Group IEN



## MUMPS Method Description

Property | Value
--- | ---
Method | [ORDEROBJ^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
Method Comment | Returns Accept Order COM Object
Input Parameters | ORGRP
Code | {::nomarkdown}<pre><code> D GETOBJ(.ORY,"ORWCOM ORDER ACCEPTED",ORGRP)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rEventHooks.pas">rEventHooks.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}