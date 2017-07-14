---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV GET CATEGORY IEN<br/>
# GMV GET CATEGORY IEN

Returns the IEN if the value is found in the GMRV VITAL CATEGORY (#120.53)file. This remote procedure call is documented in Integration Agreement 4354.

## Properties

Property | Value
--- | ---
Label | CATEGORY
Routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVCAT | LITERAL | 45 | true | GMVCAT &#x3D; Name of Category (from FILE 120.53) (e.g., METHOD)



## MUMPS Method Description

Property | Value
--- | ---
Method | [CATEGORY^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Method Comment | GMV GET CATEGORY IEN [RPC entry point]
Input Parameters | GMVCAT
First Comment | {::nomarkdown}<pre><code> Input<br/>  RESULT = variable name to hold result<br/>  GMVCAT = Name of Category (from FILE 120.53) (e.g., METHOD)<br/> Output: Returns the IEN if GMVTYPE exists in FILE 120.53<br/>         else returns -1</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I GMVCAT="" S RESULT=-1 Q<br/> S RESULT=+$O(^GMRD(120.53,"B",GMVCAT,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}