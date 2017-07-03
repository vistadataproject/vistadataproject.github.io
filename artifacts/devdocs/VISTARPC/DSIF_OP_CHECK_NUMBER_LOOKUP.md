---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF OP CHECK NUMBER LOOKUP
# DSIF OP CHECK NUMBER LOOKUP

Pass in one parameter - delimited BY ";" (Semicolon) Invoice IEN(Required);;  (Inpatient claims)Invoice IEN(Required);Invoice date (FM format,Required);external CPT code           (Required) - (Outpatient claims)

Property | Value
--- | ---
Label | OPCKN
Routine | [DSIFPAY8](http://code.osehra.org/dox/Routine_DSIFPAY8_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 20 | true | Pass in one parameter, &quot;;&quot; delimited Invoice IEN;;  (Inpatient claims)Invoice IEN;Invoice date (FM format);CPT code (Outpatient claims)
INVOICE DATE | LITERAL | 10 | true | 
SERVICE (CPT CODE) | LITERAL | 5 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}