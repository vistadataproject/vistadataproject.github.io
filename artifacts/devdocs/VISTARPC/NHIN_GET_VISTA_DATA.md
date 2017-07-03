---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NHIN GET VISTA DATA
# NHIN GET VISTA DATA

This RPC retrieves the requested data from VistA, and returns it in^TMP($J,"NHINV",n) as XML.

Property | Value
--- | ---
Label | GET
Routine | [NHINV](http://code.osehra.org/dox/Routine_NHINV_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number from Patient file #2[optionally DFN;ICN for remote calls]
TYPE | LITERAL | 100 | true | The kind(s) of data to return, which may include:  patient;allergy;problem;vital;lab;med;xray;  consult;procedure;surgery;document;encounter
START | LITERAL | 20 | true | The date/time from which to begin searching for data [optional].
STOP | LITERAL | 20 | true | The date/time at which to end searching for data [optional].
MAX | LITERAL | 7 | true | The maximum number of items to return per data type [optional].
ITEM | LITERAL | 30 | true | The identifier of a single item to return [optional, but TYPE mustalso be defined when used].



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}