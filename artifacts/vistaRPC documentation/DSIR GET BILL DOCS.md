---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET BILL DOCS 

 property | value 
--- | --- 
 label | DSIR GET BILL DOCS
 tag | GETDOCS
 routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC is used to get a list of document types and internal number of documents that were previously release under the type of patient/veteran.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 999 | true | Patient Internal Number | 