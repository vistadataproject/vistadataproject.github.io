---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV GET VITAL TYPE IEN<br/>
# GMV GET VITAL TYPE IEN

Returns the IEN if the value is found in the GMRV VITAL TYPE (#120.51)file. This remote procedure call is documented in Integration Agreement 4357.

## Properties

Property | Value
--- | ---
Label | TYPE
MUMPS Implementation | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVTYPE | LITERAL | 55 | true | GMVTYPE &#x3D; Name of Vital Type (from FILE 120.51) (e.g., WEIGHT)



## MUMPS Method Description

Property | Value
--- | ---
Method | [TYPE^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Method Comment | GMV GET VITAL TYPE IEN [RPC entry point]
Input Parameters | GMVTYPE
First Comment | {::nomarkdown}<pre><code> Input:<br/>   RESULT = variable name to hold result<br/>  GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT)<br/> Output: Returns the IEN if GMVTYPE exists in FILE 120.51<br/>         else returns -1<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> I GMVTYPE="" S RESULT=-1 Q<br/> S RESULT=+$O(^GMRD(120.51,"B",GMVTYPE,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}