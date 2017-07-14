---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GET PAT ORDERS<br/>
# MAGV GET PAT ORDERS

Returns an array of CONsult or RADiology orders for an inputENTERPRISE PATIENT IDENTIFIER.

## Properties

Property | Value
--- | ---
Label | GETORD
Routine | [MAGVIM02](http://code.osehra.org/dox/Routine_MAGVIM02_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENTERPRISE PATIENT ID | LITERAL | 999 | true | ENTERPRISE PATIENT ID.
PATIENT ID TYPE | LITERAL | 1 | true | Single character per ID TYPE field (#.03) of theIMAGING PATIENT REFERENCE file (#2005.6).
PATIENT ID ASSIGNING AUTHORITY | LITERAL | 1 | true | Single character per ASSIGNING AUTHORITY field (#.02) of theIMAGING PATIENT REFERENCE file (#2005.6).
PATIENT ID CREATING ENTITY | LITERAL | 30 | true | Free text per CREATING ENTITY field (#.04) of the IMAGING PATIENT REFERENCE file (#2005.6).
ORDER TYPE | LITERAL | 3 | true | Free text as &quot;CON&quot; for Consult Orders, &quot;RAD&quot; for Radiology Orders.
ORDER DATE FILTER START | LITERAL | 8 | true | A date formatted as MMDDYYYY.
ORDER DATE FILTER END | LITERAL | 8 | true | A date formatted as MMDDYYYY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}