---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE PARSE GENERAL DATA 

 property | value 
--- | --- 
 label | SDOE PARSE GENERAL DATA
 tag | PARSE
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call (RPC) will parse the data returned bythe 'SDOE GET GENERAL DATA' RPC into individual field nodes. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENCOUNTER DATA | LIST |  | true | This array contains subscripts that correspond to each node of data foran Outpatient Encounter entry.Note: Currently (7/97) only the zeroth node is returned. Also, onlyfields .01 thru .08 and .1 thru .13 of the zeroth are returned.Other nodes and fields are not supported.For detail information regarding the fields, see data dictionary forthe Outpatient Encounter file (#409.68). | 
| ENCOUNTER PARSE FORMAT | LITERAL |  | true | Defines format for parsed data.Valid Values:-------------      INTERNAL - use internal format       EXTERNAL - external/display format. | 




Generated on January 11th 2017, 6:34:23 am