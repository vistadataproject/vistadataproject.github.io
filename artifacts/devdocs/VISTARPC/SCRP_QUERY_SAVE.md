---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SCRP QUERY SAVE
# SCRP QUERY SAVE

This RPC attempts to save the query template definition forthe user. Before saving query, the RPC will validate the querycriteria and report any errors without saving query.The query template definition must pass the validationcheck before it can be saved.

Property | Value
--- | ---
Label | SAVE
Routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}