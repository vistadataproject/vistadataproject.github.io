---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF OP CHECK NUMBER LOOKUP<br/>
# DSIF OP CHECK NUMBER LOOKUP

Pass in one parameter - delimited BY ";" (Semicolon) Invoice IEN(Required);;  (Inpatient claims)Invoice IEN(Required);Invoice date (FM format,Required);external CPT code           (Required) - (Outpatient claims)

## Properties

Property | Value
--- | ---
Label | OPCKN
MUMPS Implementation | [DSIFPAY8](http://code.osehra.org/dox/Routine_DSIFPAY8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 20 | true | Pass in one parameter, &quot;;&quot; delimited Invoice IEN;;  (Inpatient claims)Invoice IEN;Invoice date (FM format);CPT code (Outpatient claims)
INVOICE DATE | LITERAL | 10 | true | 
SERVICE (CPT CODE) | LITERAL | 5 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}