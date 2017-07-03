---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV LOCATION SELECT
# GMV LOCATION SELECT

Select a hospital location by name, from a patient appointment or from apatient admission. Can also generate a list of active clinics. This remote procedure is documented in Integration Agreement 4461.

Property | Value
--- | ---
Label | RPC
Routine | [GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 10 | true | Routine tag line in GMVRPCHL to call.
DATA | LITERAL | 100 | true | Other data as required for the call.



### MUMPS Method Description

Property | Value
--- | ---
Method | [RPC^GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html)
Method Comment | [Procedure] Main RPC call tag
Input Parameters | OPTION, DATA
First Comment | {::nomarkdown}<pre><code> RPC: [GMV LOCATION SELECT]<br/><br/> Input parameters<br/>  1. RESULTS [Reference/Required] RPC Return array<br/>  2. OPTION [Literal/Required] RPC Option to execute<br/>  3. DATA [Literal/Required] Other data as required for call<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> S RESULTS=$NA(^TMP("GMVHLOC",$J)) K @RESULTS<br/> D:$T(@OPTION)]"" @OPTION<br/> S:'$D(@RESULTS) @RESULTS@(0)="-1^No results returned"<br/> D CLEAN^DILF,KVAR^VADPT</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}