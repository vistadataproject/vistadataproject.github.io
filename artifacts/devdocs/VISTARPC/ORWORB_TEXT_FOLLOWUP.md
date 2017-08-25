---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORB TEXT FOLLOWUP<br/>
# ORWORB TEXT FOLLOWUP

Returns text for notifications/alerts with a simple text message follow-upaction.

## Properties

Property | Value
--- | ---
Label | TXTFUP
MUMPS Implementation | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].
NOTIFICATION | LITERAL | 20 | true | Internal entry number of notification in the OE/RR Notification file[^OR(100.9].
XQADATA | LITERAL | 255 | true | Optional data used in some follow-up actions.



## MUMPS Method Description

Property | Value
--- | ---
Method | [TXTFUP^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | Follow-up for text messages
Input Parameters | DFN, NOTIF, XQADATA
Code | {::nomarkdown}<pre><code> I NOTIF=67 D CHGRAD</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}