---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE MH TEST AUTHORIZED
# ORWPCE MH TEST AUTHORIZED

Indicates if a given mental health test can be given by the given user.

Property | Value
--- | ---
Label | MHATHRZD
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TEST | LITERAL |  |  | MENTAL HEALTH TEST NAME
USER | LITERAL |  |  | The user giving the test.



### MUMPS Method Description

Property | Value
--- | ---
Method | [MHATHRZD^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Indicates that user can score test
Input Parameters | TEST, USER
Code | {::nomarkdown}<pre><code> N ORYS,ORANS<br/> I $T(PRIVL^YTAPI5)="" S ORY=1 Q<br/> S ORY=0<br/> S ORYS("CODE")=TEST<br/> S ORYS("STAFF")=USER<br/> D PRIVL^YTAPI5(.ORANS,.ORYS)<br/> I $G(ORANS(1))="[DATA]" S ORY=+$P($G(ORANS(2)),U,1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}