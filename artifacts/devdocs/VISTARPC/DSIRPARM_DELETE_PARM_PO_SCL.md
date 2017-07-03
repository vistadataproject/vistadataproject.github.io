---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRPARM DELETE PARM PO SCL
# DSIRPARM DELETE PARM PO SCL

This RPC will delete entries in files 19620.701 (DSIR FACILITY PARAMETERS), 19620.702 (DSIR ROI PRINT ORDER) or 19620.703 (DSIR SENSITIVE CLINIC) based on the file specified in the second input parameter.

Property | Value
--- | ---
Label | DELETE
Routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | IEN to file specified in FIL parameter - Required
FIL | LITERAL | 9 | true | Decimal value of the file to delete entry - Required        19620.701 &#x3D; DSIR FACILITY PARAMETERS        19620.702 &#x3D; DSIR ROI PRINT ORDER        19620.703 &#x3D; DSIR SENSITIVE CLINIC



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}