---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV CONVERT DATE<br/>
# GMV CONVERT DATE

This remote procedure call converts a user-supplied date/time into VAFileMan's internal and external date format. This remote procedure call is documented in Integration Agreement 4353.

## Properties

Property | Value
--- | ---
Label | GETDT
Routine | [GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMRDATE | LITERAL | 30 | true | GMRDATE is the user-supplied date/time text.



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETDT^GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html)
Method Comment | GMV CONVERT DATE [RPC entry point]
Input Parameters | GMRDATE
First Comment | {::nomarkdown}<pre><code>INPUT VARIABLE:<br/>GMRDATE - DATE/TIME FROM EDIT.TEXT ENTERED BY USER<br/>OUTPUT VARIABLE:<br/>RESULT - CONTAINS INTERNAL AND EXTERNAL DATE/TIME</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GDATE D DT^DILF("ETS",GMRDATE,.GDATE)<br/> I $G(GDATE)'>0 S RESULT="" Q<br/> I $G(GDATE)>$$NOW^XLFDT S RESULT="" Q<br/> S RESULT=$G(GDATE)_"^"_$G(GDATE(0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}