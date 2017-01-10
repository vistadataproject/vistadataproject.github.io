---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB GET SET 

 property | value 
--- | --- 
 label | DVBAB GET SET
 tag | GETSET
 routine | [DVBABDDU](http://code.osehra.org/dox/Routine_DVBABDDU_source.html)
 return value type | ARRAY
 description | This remote procedure retrieves the SET OF CODES for a given file and field for use in populating controls.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DVBFIL | LITERAL |  | true | This paramater contains a valid file number. | 
| vs:Input_Parameter-8994_02 | DVBFLD | LITERAL |  | true | This parameter contains a field in the file passed as DVBFIL. | 