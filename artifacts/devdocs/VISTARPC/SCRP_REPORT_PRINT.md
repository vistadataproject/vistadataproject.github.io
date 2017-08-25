---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCRP REPORT PRINT<br/>
# SCRP REPORT PRINT

This RPC queues a report to print based thethe query template definition passed in aspart ithe RPC call.The RPC returns the TaskMan task number.Before the report assoicated with the query templateis queued to print, it must pass a validation check.This check makes sure the criteria in the templateis appropriate for the report. If the validation fails,the errors are returned as part of the RPC.

## Properties

Property | Value
--- | ---
Label | PRINT
MUMPS Implementation | [SCRPBK3](http://code.osehra.org/dox/Routine_SCRPBK3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PRINTER | LITERAL | 30 | true | Name of the printer where report should print.
RUN DATE | LITERAL | 20 | true | Date report should be printed.
TIME | LITERAL | 20 | true | Time of day report should be printed.
QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}