---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORB DELETE ALERT<br/>
# ORB DELETE ALERT

This function deletes an alert.

## Properties

Property | Value
--- | ---
Label | DEL
Routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 32 | true | The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:&quot;OR,&lt;dfn&gt;,&lt;notif ien&gt;;&lt;notif date.time&gt;&quot;



## MUMPS Method Description

Property | Value
--- | ---
Method | [DEL^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
Method Comment | delete an alert
Input Parameters | XQAID, ORKILL
Code | {::nomarkdown}<pre><code> N ORN<br/> S ORN=$P($P(XQAID,";"),",",3)<br/> I $G(ORKILL)=1!($G(ORKILL)=0) S XQAKILL=ORKILL<br/> I $G(XQAKILL)="" S XQAKILL=$$XQAKILL^ORB3F1(ORN)<br/> I $G(XQAKILL)="" S XQAKILL=1<br/> S ORBY="FALSE"<br/> I $L($G(XQAID)) D DELETE^XQALERT S ORBY="TRUE"<br/> K XQAKILL</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}