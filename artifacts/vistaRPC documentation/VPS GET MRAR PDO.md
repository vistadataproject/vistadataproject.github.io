---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET MRAR PDO 

 property | value 
--- | --- 
 label | VPS GET MRAR PDO
 tag | GET
 routine | [VPSPDO1](http://code.osehra.org/dox/Routine_VPSPDO1_source.html)
 return value type | GLOBAL ARRAY
 description | Software that supports this procedure will build a global array with each subscript in the array assigned a line of text representing clinical data (allergy and medications) associated with the results of a Medication Review Allergy Review with the veteran.  This is referred to as PDO outputand will be presented as a note on the STAFF-FACING interface on Vetlink.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VPSNUM | LITERAL | 30 | true | Patient ID. This parameter value could be SSN, DFN, ICN, or VIC/CAC based on Patient ID Type. | 
| vs:Input_Parameter-8994_02 | VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Value is SSN, DFN, ICN, or VIC/CAC | 