---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XDR ADD POTENTIAL PATIENT DUP 

 property | value 
--- | --- 
 label | XDR ADD POTENTIAL PATIENT DUP
 tag | ADD
 routine | [XDRDADDS](http://code.osehra.org/dox/Routine_XDRDADDS_source.html)
 return value type | SINGLE VALUE
 description | Add a record to the VistA DUPLICATE RECORD file (#15), or find an existingrecord for the pair of potential duplicates passed to the RPC. This waswritten to allow MPI to add potential duplicate patients to the file, whenpotential duplicates are detected by the Person Service IdentityManagement (PSIM) probabilistic search.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE NUMBER | LITERAL | 20 | true | File number for the file to which the potential duplicate records belong. For example, if the two potential duplicate entries are on the PATIENT file, this value is set to 2. | 
| TO_IEN | LITERAL | 14 | true | Internal Entry Number (IEN) of one of the potential duplicate records. For example, this could be a DFN from the PATIENT file (file #2). | 
| FROM_IEN | LITERAL | 14 | true | Internal Entry Number (IEN) of one of the potential duplicate records. For example, this could be a DFN from the PATIENT file (file #2). | 




 ###### Generated on January 11th 2017, 6:39:43 am