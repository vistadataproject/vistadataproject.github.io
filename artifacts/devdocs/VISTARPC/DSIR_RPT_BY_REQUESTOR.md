---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR RPT BY REQUESTOR
# DSIR RPT BY REQUESTOR

Retrieves ROI requests for a given date range for use in GUI reports.

Property | Value
--- | ---
Label | BYREQ
Routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM DATE | LITERAL | 7 | true | The FileMan Date to start retrieval process.
TO DATE | LITERAL | 7 | true | FileMan date to end retrieval process.
STATUS | LITERAL | 7 | true | &quot;A&quot;  : Get only the appealed requests  (-RV,-PR)&quot;O&quot;  : Get only the open&quot;C&quot;  : &quot;          &quot; closed  (-D,-G,-P)&quot;P&quot;  : &quot;          &quot; pending&quot;N&quot;  : &quot;          &quot;other nondisclosured (-NR,-RF,-ND,-NV,-RC)&quot;E&quot;  : &quot;          &quot; entered in error&quot;X&quot;  : &quot;          &quot; cancelled&quot;ALL&quot;: Gets all statuses This parameter may be any combination of the codes delimited by the &#x27;^&#x27; or the word &#x27;ALL&#x27;.
CLERK(S) | LIST | 99 | true | This is an array of clerk IENs.        (1-n)&#x3D;IEN to file 200
DIVISION(S) | LITERAL | 99 | true | This parameter is used by the routine if the person requesting this report holds the DSIR MDIV key.  It is a list of internal Institution File entry numbers (File 4), delimited by &#x27;^&#x27;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}