---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP QUERY SAVE 

 property | value 
--- | --- 
 label | SCRP QUERY SAVE
 tag | SAVE
 routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
 return value type | ARRAY
 description | This RPC attempts to save the query template definition forthe user. Before saving query, the RPC will validate the querycriteria and report any errors without saving query.The query template definition must pass the validationcheck before it can be saved.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| QUERY DEFINITION | LIST |  | true | This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client. | 




 Generated on January 11th 2017, 7:15:03 am