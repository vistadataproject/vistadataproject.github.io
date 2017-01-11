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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| EXAMIEN | LITERAL | 30 | true | 2507 Exam IEN | 
| DAS | LITERAL | 250 | true | DAS is the XML DAS Conformation message | 
| DATTIM | LITERAL |  | true | DATTIM is the XML Transmission Date/Time | 
| XML | LIST |  | true | XML is the array list format of the template being stored | 




Generated on January 11th 2017, 6:34:23 am