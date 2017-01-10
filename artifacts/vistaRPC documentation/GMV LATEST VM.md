---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV LATEST VM 

 property | value 
--- | --- 
 label | GMV LATEST VM
 tag | GETLAT
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call retrieves the latest vital records for a givenpatient. This remote procedure call is documented in Integration Agreement 4358.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMRDFN | LITERAL | 10 | true | GMRDFN variable is a pointer to the Patient (#2) file (i.e., DFN). | 