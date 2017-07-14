---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPR GET PATIENT DATA<br/>
# VPR GET PATIENT DATA

This RPC retrieves the requested data from VistA, and returns it in^TMP("VPR",$J,n) as XML.

## Properties

Property | Value
--- | ---
Label | GET
Routine | [VPRD](http://code.osehra.org/dox/Routine_VPRD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number from Patient file #2[optionally DFN;ICN for remote calls]
TYPE | LITERAL | 100 | true | The kind(s) of data to return, which may include:  demographics;reactions;problems;vitals;labs;meds;  immunizations;visits;appointments;documents;  procedures;consults
START | LITERAL | 20 | true | The date/time from which to begin searching for data [optional].
STOP | LITERAL | 20 | true | The date/time at which to end searching for data [optional].
MAX | LITERAL | 7 | true | The maximum number of items to return per data type [optional].
ITEM | LITERAL | 30 | true | The identifier of a single item to return [optional, but TYPE mustalso be defined when used].
FILTER | LIST |  | true | List of name-value pairs, further refining the search.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}