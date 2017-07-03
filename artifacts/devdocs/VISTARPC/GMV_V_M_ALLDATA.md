---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV V M ALLDATA
# GMV V M ALLDATA

This remote procedure call lists all vitals/measurements data for a givendate/time span. This remote procedure call is documented in Integration Agreement 4654.

Property | Value
--- | ---
Label | VMDATA
Routine | [GMVGGR1](http://code.osehra.org/dox/Routine_GMVGGR1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVDATA | LITERAL | 60 | true | GMVDATA consists of 4 pieces of data:  piece1^piece2^piece3^piece4  where piece1 &#x3D; File 2 IEN (i.e., DFN)       piece2 &#x3D; Start date/time for search (FileMan internal format)       piece3 &#x3D; End date/time for search (FileMan internal format)       piece4 &#x3D; 0 (zero)




### CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}