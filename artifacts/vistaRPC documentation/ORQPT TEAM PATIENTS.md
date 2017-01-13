---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT TEAM PATIENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT TEAM PATIENTS{:/}
 tag | {::nomarkdown}TEAMPTS{:/}
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of patients on a team.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF PATIENTS IN A TEAM

 Leading comment lines | {::nomarkdown}Also called under DBIA # 2692.
If TMPFLAG passed and = TRUE, code expects a "^TMP(xxx"
global root string passed in ORY, and builds the returned 
list in that global instead of to a memory array.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEAM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number from the OE/RR Team File (#100.21).{:/} | 




 Generated on January 13th 2017, 6:15:57 am