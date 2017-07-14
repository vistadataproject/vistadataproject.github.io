---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM MENTAL HEALTH RESULTS<br/>
# ORQQPXRM MENTAL HEALTH RESULTS

Returns progress note text based on the results of the test.

## Properties

Property | Value
--- | ---
Label | MHR
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULT GROUP/ELEMENT | LITERAL | 16 | true | This is the pointer to the result group for the test.
TEST RESULTS | LITERAL | 16 | true | Field to pass contents of the YS array (R1,R2,DFN,DUZ,ADATE etc).



## MUMPS Method Description

Property | Value
--- | ---
Method | [MHR^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | RESULT, ORES
First Comment | {::nomarkdown}<pre><code> DBIA 3080</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D MHR^PXRMRPCC(.ORY,RESULT,.ORES)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}