---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV UPDATE PAT REF 

 property | value 
--- | --- 
 label | MAGV UPDATE PAT REF
 tag | UPDPAT
 routine | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
 return value type | ARRAY
 description | This RPC allows an Imaging patient reference to be updated.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIDATTS | LIST | 32000 | true | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDPAT^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. Input parameters used for update are the following:  IEN (required): the internal entry number of the patient reference  ID_VALUE (required): the raw value of the ID ID_TYPE (required): the type of ID (M)RN or (I)CN or (D)FN ASSIGNING_ENTITY: (V)A, (D)oD, (I)HS | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking. | 