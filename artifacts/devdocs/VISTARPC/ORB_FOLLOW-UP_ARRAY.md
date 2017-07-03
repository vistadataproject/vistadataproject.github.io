---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORB FOLLOW-UP ARRAY
# ORB FOLLOW-UP ARRAY

This function returns an array of follow-up data.  Content of the datavaries by notification.

Property | Value
--- | ---
Label | GUI
Routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 32 | true | The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  The OE/RR alerts the format is:&quot;OR,&lt;dfn&gt;,&lt;notif ien&gt;;&lt;notif date.time&gt;&quot;



### MUMPS Method Description

Property | Value
--- | ---
Method | [GUI^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Method Comment | Notification follow-up for GUI called via API: ORB FOLLOW-UP
Input Parameters | ORXQAID
First Comment | {::nomarkdown}<pre><code> called by ORB FOLLOW-UP api:</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORENVIR="GUI"<br/> D PROCESS</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}