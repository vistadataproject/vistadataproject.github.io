---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS REPLACE MULTIPLE 

 property | value 
--- | --- 
 label | OOPS REPLACE MULTIPLE
 tag | REPLMULT
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | ARRAY
 description | This procedure is for updating entries in a multiple, in 2 stages.Stage 1 deletes all current entries, step 2 creates new entries using data passed back from the GUI form.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SINGLE | LITERAL | 256 | true | This parameter contains the file, field, and IEN of the data to be filed in the format FILE^FIELD^IEN. | 
| DATA | LIST |  | true | This parameter contains the data to be filed in the multiple. | 