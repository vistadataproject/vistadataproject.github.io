---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB PARAMETER<br/>
# PSB PARAMETER

Called by client to return or set parameters

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [PSBPAR](http://code.osehra.org/dox/Routine_PSBPAR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBCMD | LITERAL | 6 | true | Contains the command to perform against the system parameters.GETPAR: Get a single instance of a parameterGETLST: Get all instances of a multiple valued parameterSETPAR: Set a single instance of a parameterCLRLST: Clear all instances of parameters in a list
PSBENT | LITERAL | 30 | true | Contains the entity to act upon.  Usually &quot;###;DIC(4,&quot; for division.
PSBPAR | LITERAL | 30 | true | The parameter as defined in file 8989.51.
PSBINS | LITERAL | 30 | true | The instance of the parameter that you want to return.  Defaults to 1.
PSBVAL | LITERAL | 80 | true | If setting a parameter this contains the data value to place in the parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}