---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORB FOLLOW-UP STRING<br/>
# ORB FOLLOW-UP STRING

This function returns a string of follow-up data.  Content of the data varies by notification.

## Properties

Property | Value
--- | ---
Label | GUI
Routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 32 | true | The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  For OE/RR alerts the format is:&quot;OR,&lt;dfn&gt;,&lt;notif ien&gt;;&lt;notif date.time&gt;&quot;



## MUMPS Method Description

Property | Value
--- | ---
Method | [GUI^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Method Comment | Notification follow-up for GUI called via API: ORB FOLLOW-UP
Input Parameters | ORXQAID
First Comment | {::nomarkdown}<pre><code> called by ORB FOLLOW-UP api:</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORENVIR="GUI"<br/> D PROCESS</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}