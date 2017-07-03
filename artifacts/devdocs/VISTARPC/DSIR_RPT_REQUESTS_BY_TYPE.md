---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR RPT REQUESTS BY TYPE
# DSIR RPT REQUESTS BY TYPE



Property | Value
--- | ---
Label | REQTYP
Routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM DATE | LITERAL | 7 | true | 
TO DATE | LITERAL | 7 | true | 
STATUS | LITERAL | 99 | true | &quot;A&quot;  : Get only the appealed requests  (-RV,-PR)&quot;O&quot;  : Get only the open&quot;C&quot;  : &quot;          &quot; closed  (-D,-G,-P)&quot;P&quot;  : &quot;          &quot; pending&quot;N&quot;  : &quot;          &quot;other nondisclosured (-NR,-RF,-ND,-NV,-RC)&quot;E&quot;  : &quot;          &quot; entered in error&quot;X&quot;  : &quot;          &quot; cancelled&quot;ALL&quot;: Gets all statuses This parameter may be any combination of the codes delimited by the &#x27;^&#x27;or the word &#x27;ALL&#x27;.
DIVISIONS | LITERAL | 99 | true | This parameter is used by the routine if the person requesting thisreport holds the DSIR MDIV key.  It is a list of internal InstitutionFile entry numbers (File 4), delimited by &#x27;^&#x27;.
TYPES | LIST | 99 | true | This is an array of internal numbers to file 19620.61 DSIR TYPE OF REQUEST.  It is used for reporting criteria if no types are specified then all types will be included in the report.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}