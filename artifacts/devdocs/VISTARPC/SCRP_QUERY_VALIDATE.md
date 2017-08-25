---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCRP QUERY VALIDATE<br/>
# SCRP QUERY VALIDATE

This RPC will validate the criteria specified in thequery template definiton passed in as part of the call.The validation checks the criteria against what datais required the report assoicated with the template.If the validation check fails, then the errors foundare returned as part of the RPC, otherwise a successflag(1) is returned.

## Properties

Property | Value
--- | ---
Label | VALID
MUMPS Implementation | [SCRPBK4](http://code.osehra.org/dox/Routine_SCRPBK4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.
VALIDATE MODE | LITERAL | 50 | true | This parameter indicates whether all validation checksneed to be made(FULL) or only those checks related toentity entry selection(SELECTIONS) should be made.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}