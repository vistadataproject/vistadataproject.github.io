---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCRP QUERY SAVE 

 property | value 
--- | --- 
 label | {::nomarkdown}SCRP QUERY SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC attempts to save the query template definition forthe user. Before saving query, the RPC will validate the querycriteria and report any errors without saving query.The query template definition must pass the validationcheck before it can be saved.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QUERY DEFINITION{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.{:/} | 




 Generated on January 13th 2017, 6:44:47 am