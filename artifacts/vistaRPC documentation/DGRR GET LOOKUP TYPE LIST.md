---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR GET LOOKUP TYPE LIST 

 property | value 
--- | --- 
 label | DGRR GET LOOKUP TYPE LIST
 tag | GETLIST
 routine | [DGRRLU3](http://code.osehra.org/dox/Routine_DGRRLU3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns an XML document containing a list of wards or a list ofclinics (depending on what was requested)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM | LIST | 99 | true | PARAM(\TYPE\)=\ward\ returns a list of wardsPARAM(\TYPE\)=\clinic\ returns a list of clinicsPARAM(\TYPE\)=\provider\ returns a list of providersPARAM(\VALUE\)=Beginning value or null to start at the beginning               or end of the file.PARAM(\MAXNUM\)=Number of entries to be returned.  Defaults to                traversing forward. If MAXNUM contains a negative                number, traverses through the file backwards. | 