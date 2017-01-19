---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCRP QUERY DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCRP QUERY DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows for the deletion of a query, usuallyat the request of the user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QUERY DEFINITION{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the complete definition of the querytemplate. The format of the definition data is defined bythe TScQryDef.BuildQuery method on the client.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}