---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV USER
# GMV USER

Retrieves data about the user (e.g., parameter settings). This remote procedure call is documented in Integration Agreement 4366.

Property | Value
--- | ---
Label | RPC
Routine | [GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 10 | true | Routine tag line to call in GMVRPCU.
DATA | LITERAL | 100 | true | Other data as required for the call.



### MUMPS Method Description

Property | Value
--- | ---
Method | [RPC^GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)
Method Comment | [Procedure] Main RPC call tag
Input Parameters | OPTION, DATA
First Comment | {::nomarkdown}<pre><code> RPC: [GMV USER]<br/><br/> Input parameters<br/>  1. RESULTS [Reference/Required] RPC Return array<br/>  2. OPTION [Literal/Required] RPC Option to execute<br/>  3. DATA [Literal/Required] Other data as required for call<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GMV,GMVCAT,GMVDESC,GMVENT,GMVERR,GMVFDA,GMVFLD,GMVIEN,GMVIT,GMVNAM,GMVNAME,GMVNEW,GMVOLD,GMVOWN,GMVOWNER,GMVQUAL,GMVROOT,GMVTYPE,GMVVAL,GMVVIT,GMVSCRN<br/> S RESULTS=$NA(^TMP("GMVUSER",$J)) K @RESULTS<br/> D:$T(@OPTION)]"" @OPTION<br/> S:'$D(@RESULTS) @RESULTS@(0)="-1^No results returned"<br/> D CLEAN^DILF</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}