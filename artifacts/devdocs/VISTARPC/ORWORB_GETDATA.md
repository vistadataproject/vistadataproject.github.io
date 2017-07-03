---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWORB GETDATA
# ORWORB GETDATA

Given an XQAID, return XQADATA for an alert.

Property | Value
--- | ---
Label | GETDATA
Routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 60 | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDATA^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | return XQADATA for an alert
Input Parameters | XQAID
Code | {::nomarkdown}<pre><code> N SHOWADD<br/> S ORY=""<br/> Q:$G(XQAID)=""!('$D(^XTV(8992,"AXQA",XQAID)))<br/> D GETACT^XQALERT(XQAID)<br/> S ORY=XQADATA<br/> I ($E(XQAID,1,3)="TIU"),(+ORY>0) D<br/> . S SHOWADD=1<br/> . S ORY=ORY_$$RESOLVE^TIUSRVLO(+ORY)<br/> K XQAID,XQADATA,XQAOPT,XQAROU</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}