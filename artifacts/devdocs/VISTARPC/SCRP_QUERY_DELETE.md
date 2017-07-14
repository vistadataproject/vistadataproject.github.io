---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCRP QUERY DELETE<br/>
# SCRP QUERY DELETE

This RPC allows for the deletion of a query, usuallyat the request of the user.

## Properties

Property | Value
--- | ---
Label | DELETE
Routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}