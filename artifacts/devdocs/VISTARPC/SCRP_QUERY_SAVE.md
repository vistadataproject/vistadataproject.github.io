---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCRP QUERY SAVE<br/>
# SCRP QUERY SAVE

This RPC attempts to save the query template definition forthe user. Before saving query, the RPC will validate the querycriteria and report any errors without saving query.The query template definition must pass the validationcheck before it can be saved.

## Properties

Property | Value
--- | ---
Label | SAVE
MUMPS Implementation | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}