---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS REPLACE WP 

 property | value 
--- | --- 
 label | OOPS REPLACE WP
 tag | REPLWP
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This call will replace Word Processing fields based on input paramtersindicating the file, field and IEN of the record that will be changed. Anotherinput parameter contains the data via a list or pointer that will be placedinto the \new\ word processing fields. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL |  | true | The input parameter must contain the file,field and IEN of the record to bemodified. It must be in the formatFILE^FIELD^IEN. | 
| vs:Input_Parameter-8994_02 | DATA | LIST |  | true | This is the new text that will be inserted into the word processing field. | 