---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV VALIDATE VI INDEX TERMS 

 property | value 
--- | --- 
 label | DSIV VALIDATE VI INDEX TERMS
 tag | VLDTSP
 routine | [DSIVTSP](http://code.osehra.org/dox/Routine_DSIVTSP_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call validates the interdependency of VIindex terms.  It ensures that Type, Procedure/Event, andSpecialty/SubSpecialty are active, checks to see if Type is Clinical ifProcedure/Event or Specialty/SubSpecialty are input, and makes sure thatthe input Specialty/SubSpecialty is associated with the inputProcedure/Event.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PROC | LITERAL | 50 | true | PROC is the Procedure/Event which is found in file ^MAG(2005.84) as fieldNAME. | 
| TYPE | LITERAL | 40 | true | TYPE is the Type Index which is found in file ^MAG(2005.83) as field NAME. | 
| SPEC | LITERAL | 30 | true | SPEC is the Specialty/SubSpecialty which is found in file ^MAG(2005.85) as field NAME. | 




 Generated on January 11th 2017, 7:15:04 am