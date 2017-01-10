---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA CAPRI EXAM XML 

 property | value 
--- | --- 
 label | DVBA CAPRI EXAM XML
 tag | FILEIN
 routine | [DVBAXML](http://code.osehra.org/dox/Routine_DVBAXML_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows for the filling of the 2507 EXAM template in the XML version.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | EXAMIEN | LITERAL | 30 | true | 2507 Exam IEN | 
| vs:Input_Parameter-8994_02 | DAS | LITERAL | 250 | true | DAS is the XML DAS Conformation message | 
| vs:Input_Parameter-8994_02 | DATTIM | LITERAL |  | true | DATTIM is the XML Transmission Date/Time | 
| vs:Input_Parameter-8994_02 | XML | LIST |  | true | XML is the array list format of the template being stored | 