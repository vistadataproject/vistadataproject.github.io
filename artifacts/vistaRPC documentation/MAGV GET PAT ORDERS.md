---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET PAT ORDERS 

 property | value 
--- | --- 
 label | MAGV GET PAT ORDERS
 tag | GETORD
 routine | [MAGVIM02](http://code.osehra.org/dox/Routine_MAGVIM02_source.html)
 return value type | ARRAY
 description | Returns an array of CONsult or RADiology orders for an inputENTERPRISE PATIENT IDENTIFIER.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ENTERPRISE PATIENT ID | LITERAL | 999 | true | ENTERPRISE PATIENT ID. | 
| vs:Input_Parameter-8994_02 | PATIENT ID TYPE | LITERAL | 1 | true | Single character per ID TYPE field (#.03) of theIMAGING PATIENT REFERENCE file (#2005.6). | 
| vs:Input_Parameter-8994_02 | PATIENT ID ASSIGNING AUTHORITY | LITERAL | 1 | true | Single character per ASSIGNING AUTHORITY field (#.02) of theIMAGING PATIENT REFERENCE file (#2005.6). | 
| vs:Input_Parameter-8994_02 | PATIENT ID CREATING ENTITY | LITERAL | 30 | true | Free text per CREATING ENTITY field (#.04) of the IMAGING PATIENT REFERENCE file (#2005.6). | 
| vs:Input_Parameter-8994_02 | ORDER TYPE | LITERAL | 3 | true | Free text as \CON\ for Consult Orders, \RAD\ for Radiology Orders. | 
| vs:Input_Parameter-8994_02 | ORDER DATE FILTER START | LITERAL | 8 | true | A date formatted as MMDDYYYY. | 
| vs:Input_Parameter-8994_02 | ORDER DATE FILTER END | LITERAL | 8 | true | A date formatted as MMDDYYYY. | 