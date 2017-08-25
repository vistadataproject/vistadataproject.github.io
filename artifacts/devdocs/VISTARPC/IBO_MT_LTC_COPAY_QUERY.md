---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBO MT LTC COPAY QUERY<br/>
# IBO MT LTC COPAY QUERY

This remote procedure will produce a report showing both MT and LTC copay information at a remote facility.

## Properties

Property | Value
--- | ---
Label | RETURN
MUMPS Implementation | [IBOMTLTC](http://code.osehra.org/dox/Routine_IBOMTLTC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBICN | LITERAL | 40 | true | This is the patient&#x27;s ICN used to identify the patient at a remote facility.  This is an optional paramater, the patient&#x27;s DFN if known my be passed instead.
DFN | LITERAL | 30 | true | This is the patient&#x27;s DFN, it is not required but will be used if passed.  If it is not passed, then the patient&#x27;s ICN will be necessary.
IBBDT | LITERAL | 7 | true | This is the starting date of the date range of the information requested.  It is required.
IBEDT | LITERAL | 7 | true | This is the ending date of the date range requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}