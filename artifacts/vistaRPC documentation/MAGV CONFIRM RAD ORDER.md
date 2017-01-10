---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV CONFIRM RAD ORDER 

 property | value 
--- | --- 
 label | MAGV CONFIRM RAD ORDER
 tag | CONFIRM
 routine | [MAGVIM06](http://code.osehra.org/dox/Routine_MAGVIM06_source.html)
 return value type | ARRAY
 description | Returns a RAD/NUC MED ORDERS file (#75.1) IEN for a set of DICOM Unique Identifiers.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | UIDS | LITERAL | 200 | true | Study, Series, and SOP Instance UID, \`\-delimited. Used by the Importer II applicationto verify the RAD/NUC MED ORDERS file (#75.1) IEN for an object which is determined tobe on file via a prior call to RPC: MAGV IMPORT STATUS. | 