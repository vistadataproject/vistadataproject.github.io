---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 FILTER SAVE<br/>
# MAG4 FILTER SAVE

Stores the new filter to the IMAGE LIST FILTERS file (#2005.87) or updatesproperties of the existing filter.

## Properties

Property | Value
--- | ---
Label | SET
Routine | [MAGGSFL1](http://code.osehra.org/dox/Routine_MAGGSFL1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGGZ | LIST |  | true | List that stores the filter data and related parameters. Each list item has 2 pieces separated by &#x27;^&#x27;:    ^01: Field number  ^02: Field value The following special names can be used in place of field numbers:   FLAGS - Value contains flags that control the execution           (can be combined):             S  Selective save. If this flag is               provided, then only the fields listed               in the MAGZ array are updated; other               filter properties are not changed.                By default, all filter properties,               which do not have new values in the               MAGZ array, are cleared.   IEN   - Value is the Internal Entry Number of the filter           that has to be modified.   USER  - Value is the IEN of the user who this filter is           saved for. Example:   with RPCBroker.Param[0] do    begin      PType :&#x3D; list;      Mult[1] :&#x3D; &#x27;IEN^23&#x27;;      Mult[2] :&#x3D; &#x27;FLAGS^S&#x27;;      Mult[3] :&#x3D; &#x27;15^Column Description&#x27;;    end;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}