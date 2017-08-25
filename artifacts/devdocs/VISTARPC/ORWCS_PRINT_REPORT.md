---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCS PRINT REPORT<br/>
# ORWCS PRINT REPORT

This rpc is used to print a consult report on the Consult tabin CPRS.

## Properties

Property | Value
--- | ---
Label | PRINT
MUMPS Implementation | [ORWCSP](http://code.osehra.org/dox/Routine_ORWCSP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: &lt;device name&gt; ; &lt;right margin&gt; ; &lt;page length&gt;Right margin and page length are optional.
DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file.
CONSULT ID | LITERAL | 20 | true | Identification number of the consult.



## MUMPS Method Description

Property | Value
--- | ---
Method | [PRINT^ORWCSP](http://code.osehra.org/dox/Routine_ORWCSP_source.html)
Method Comment | print report entry point
Input Parameters | ORIO, DFN, ORID
First Comment | {::nomarkdown}<pre><code>  RPC: ORWCS PRINT REPORT<br/>  See RPC definition for details on input and output parameters<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> IF '$$CHK() G PRINTQ<br/> N TASKDATA<br/> S TASKDATA("DESC")="Consult Report Print"<br/> S TASKDATA("RTN")="DEQUE^ORWCSP"<br/> D TASK(.ORY,.ORIO,.DFN,.ORID,.TASKDATA)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}