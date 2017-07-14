---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORB RENEW ALERT<br/>
# ORB RENEW ALERT

This rpc renews an alert.

## Properties

Property | Value
--- | ---
Label | RENEW
Routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 255 | true | XQAID is the unique identifier used by Kernel Alerts to process and take actions on alerts.



## MUMPS Method Description

Property | Value
--- | ---
Method | [RENEW^ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
Method Comment | renew/restore an alert/notification
Input Parameters | XQAID
Code | {::nomarkdown}<pre><code> Q:$L($G(XQAID))<1<br/> K XQAKILL<br/> I '$D(^XTV(8992,"AXQA",XQAID,DUZ)) D RESTORE^XQALERT1 ;DBIA #4100<br/> S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}