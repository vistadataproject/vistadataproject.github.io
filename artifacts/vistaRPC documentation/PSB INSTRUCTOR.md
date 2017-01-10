---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB INSTRUCTOR 

 property | value 
--- | --- 
 label | PSB INSTRUCTOR
 tag | INST
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | ARRAY
 description | Used by frmInstructor to validate that an instructor is at the client with a student.  Validation is acheived via the instructor entering their SSN and electronic signature code.  This is then validated against the NEW PERSON file (#200).  If a valid user is obtained, that user must posses the PSB INSTRUCTOR key to be passed back as an eligible instructor for the student.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBACC | LITERAL |  | true | Access Code edtSSN component on frmInstructor. | 
| vs:Input_Parameter-8994_02 | PSBVER |  |  | true | Verify Codeinstructor into the edtESIG component on frmInstructor. | 