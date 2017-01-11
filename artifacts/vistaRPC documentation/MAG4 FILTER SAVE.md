---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 FILTER SAVE 

 property | value 
--- | --- 
 label | MAG4 FILTER SAVE
 tag | SET
 routine | [MAGGSFL1](http://code.osehra.org/dox/Routine_MAGGSFL1_source.html)
 return value type | SINGLE VALUE
 description | Stores the new filter to the IMAGE LIST FILTERS file (#2005.87) or updatesproperties of the existing filter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGGZ | LIST |  | true | List that stores the filter data and related parameters. Each list item has 2 pieces separated by '^':    ^01: Field number  ^02: Field value The following special names can be used in place of field numbers:   FLAGS - Value contains flags that control the execution           (can be combined):             S  Selective save. If this flag is               provided, then only the fields listed               in the MAGZ array are updated; other               filter properties are not changed.                By default, all filter properties,               which do not have new values in the               MAGZ array, are cleared.   IEN   - Value is the Internal Entry Number of the filter           that has to be modified.   USER  - Value is the IEN of the user who this filter is           saved for. Example:   with RPCBroker.Param[0] do    begin      PType := list;      Mult[1] := 'IEN^23';      Mult[2] := 'FLAGS^S';      Mult[3] := '15^Column Description';    end; | 




 ###### Generated on January 11th 2017, 6:39:43 am