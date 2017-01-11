---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC PATIENT LOOKUP 

 property | value 
--- | --- 
 label | SC PATIENT LOOKUP
 tag | FINDP
 routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
 return value type | GLOBAL ARRAY
 description | Patient lookup.  This is intended as a temporary RPC until a VA orFileMan component is available.  Does a Multiple index lookup onthe PATIENT file (#2).  This does not invoke DPTLK.  Given lookupvalue, this returns a list of the form DFN^patient name^DOB^PID. Only the first 500 records that match the value are returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LIST ATTRIBUTES | LIST | 512 | true |  | 




 ###### Generated on January 11th 2017, 6:39:42 am