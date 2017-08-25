---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORB FOLLOW-UP TYPE<br/>
# ORB FOLLOW-UP TYPE

Returns the follow-up action type for a notification as identified via thealert xqaid.

## Properties

Property | Value
--- | ---
Label | TYPE
MUMPS Implementation | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 32 | true | The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  For OE/RR alerts the format is:&quot;OR,&lt;dfn&gt;,&lt;notif ien&gt;;&lt;notif date.time&gt;&quot;



## MUMPS Method Description

Property | Value
--- | ---
Method | [TYPE^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Method Comment | return notif follow-up action type
Input Parameters | ORXQAID
Code | {::nomarkdown}<pre><code> N NIEN<br/> S NIEN=$P($P(ORXQAID,";"),",",3)<br/> S ORBY=$G(^ORD(100.9,NIEN,3))<br/> I ORBY="" S ORBY="INFO^"<br/> E  S ORBY=$P(ORBY,U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}