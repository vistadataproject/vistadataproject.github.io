---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRA PRINT REPORT<br/>
# ORWRA PRINT REPORT

This rpc is used to print an imaging report on the Imaging tabin CPRS.

## Properties

Property | Value
--- | ---
Label | PRINT
Routine | [ORWRAP](http://code.osehra.org/dox/Routine_ORWRAP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: &lt;device name&gt; ; &lt;right margin&gt; ; &lt;page length&gt;Right margin and page length are optional.
DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file.
EXAM ID | LITERAL | 20 | true | Identification number of the imaging exam.



## MUMPS Method Description

Property | Value
--- | ---
Method | [PRINT^ORWRAP](http://code.osehra.org/dox/Routine_ORWRAP_source.html)
Method Comment | print report entry point
Input Parameters | ORIO, DFN, ORID
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRA PRINT REPORT<br/>  See RPC definition for details on input and output parameters<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> IF '$$CHK^ORWCSP() G PRINTQ<br/> N TASKDATA<br/> S TASKDATA("DESC")="Imaging Report Print"<br/> S TASKDATA("RTN")="DEQUE^ORWRAP"<br/> D TASK^ORWCSP(.ORY,.ORIO,.DFN,.ORID,.TASKDATA)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}