---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV PTSELECT 

 property | value 
--- | --- 
 label | GMV PTSELECT
 tag | RPC
 routine | [GMVRPCP](http://code.osehra.org/dox/Routine_GMVRPCP_source.html)
 return value type | GLOBAL ARRAY
 description | Used as a method of processing a patient DFN and returning all warnings and notices (i.e. sensitivity or same last 4 of SSN) to the client application for processing.  Also includes a call to log access of sensitive patients to the DG SECURITY LOG file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RESULT | REFERENCE | 30 | true | This is the RPC return array variable. | 
| OPTION | LITERAL | 30 | true | Contains the appropriate method to perform within this RPC call. Options are:  SELECT: Performs a select of the supplied DFN (param 3) and returns the           notices and warnings for the DFN   LOGSEC: Logs a security entry in the DG SECURITY LOG file. | 
| DFN | LITERAL | 12 | true | Contains the DFN of the patient to process in the SELECT or LOGSEC method of param 2. | 
| DATA | LITERAL | 80 | true | Used to pass in the option name to DGSEC when logging against the DG SECURITY LOG file. | 




 ###### Generated on January 11th 2017, 6:39:43 am