---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORB FORWARD ALERT<br/>
# ORB FORWARD ALERT

The rpc forwards an alert.

## Properties

Property | Value
--- | ---
Label | FWD
Routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 255 | true | The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:&quot;OR,&lt;dfn&gt;,&lt;notif ien&gt;;&lt;notif date.time&gt;&quot;
RECIPIENT | LITERAL | 64 | true | DUZ (file 200 ien) of the person to receive the forwarded alert.
TYPE | LITERAL | 16 | true | The type of message to be forwarded.  &quot;A&quot; indicates an alert is to be forwarded.
COMMENT | LITERAL | 255 |  | The comment (optional) to be forwarded with the alert.



## MUMPS Method Description

Property | Value
--- | ---
Method | [FWD^ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
Method Comment | forward a notification
Input Parameters | ORBLST, ORBRECIP, ORBTYPE, ORBCOMNT
Code | {::nomarkdown}<pre><code> I ORBLST="" S ORY=0 Q<br/> S ORBLST(1)=ORBLST<br/> D FORWARD^XQALFWD(.ORBLST,.ORBRECIP,ORBTYPE,ORBCOMNT)<br/> S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}