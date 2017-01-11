---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CP CONSULT TO TIUDA 

 property | value 
--- | --- 
 label | MAG4 CP CONSULT TO TIUDA
 tag | TIUDA
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | ARRAY
 description |  Imaging Capture workstation calls this RPC to get a TIU IEN to attach images to. This call simply calls a CP API, which accepts DFN, Consult #, Visit String (optional), Complete|Do not Complete the | transaction.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDFN | LITERAL | 30 | true | DFN of Patient | 
| MAGCONS | LITERAL | 30 | true |  This is the consult #.  The consult # is returned as a part of the Clinical Procedure Requests Query. | 
| MAGVSTR | LITERAL | 30 | true |  Visit String, needed to create a New Tiu Note. Visit String is returned as part of the Query to get Patient Visits. The Query to get a list of patient visits, is done directly before this call from the Capture Workstation. | 
| MAGCMP | LITERAL | 10 | true |  Flag:  tells to Complete (1) or Not Complete (0) the CP transaction.  If Not Complete, then this transaction is available on the CP User station to attach images to. | 




Generated on January 11th 2017, 6:34:23 am