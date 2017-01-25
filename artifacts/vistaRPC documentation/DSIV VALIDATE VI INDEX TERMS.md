---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV VALIDATE VI INDEX TERMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV VALIDATE VI INDEX TERMS{:/}
 tag | {::nomarkdown}VLDTSP{:/}
 routine | [DSIVTSP](http://code.osehra.org/dox/Routine_DSIVTSP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call validates the interdependency of VIindex terms.  It ensures that Type, Procedure/Event, andSpecialty/SubSpecialty are active, checks to see if Type is Clinical ifProcedure/Event or Specialty/SubSpecialty are input, and makes sure thatthe input Specialty/SubSpecialty is associated with the inputProcedure/Event.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PROC is the Procedure/Event which is found in file ^MAG(2005.84) as fieldNAME.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}TYPE is the Type Index which is found in file ^MAG(2005.83) as field NAME.{:/} | 
| {::nomarkdown}SPEC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SPEC is the Specialty/SubSpecialty which is found in file ^MAG(2005.85) as field NAME.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}