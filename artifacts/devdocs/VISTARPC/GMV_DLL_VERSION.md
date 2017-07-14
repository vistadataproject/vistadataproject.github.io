---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV DLL VERSION<br/>
# GMV DLL VERSION

Returns a YES or NO response to indicate if the Dynamic Link Library (DLL)file should be used. This remote procedure call is documented in Integration Agreement 4420.

## Properties

Property | Value
--- | ---
Label | DLL
Routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVX | LITERAL | 50 | true | This value is the name of the file and the date/time associated with it (e.g., GMV_VITALSVIEWENTER.DLL:v. 07/21/05 10:34).



## MUMPS Method Description

Property | Value
--- | ---
Method | [DLL^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Method Comment | Entry for [GMV DLL VERSION] RPC. Returns DLL version check
Input Parameters | GMVX
First Comment | {::nomarkdown}<pre><code> RESULT = variable name to return check<br/>   GMVX = dll name and version date/time<br/> Returns yes or no  </code></pre>{:/}
Code | {::nomarkdown}<pre><code> S RESULT=$$GET^XPAR("SYS","GMV DLL VERSION",GMVX,"E")<br/> S:RESULT="" RESULT="NO"<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}