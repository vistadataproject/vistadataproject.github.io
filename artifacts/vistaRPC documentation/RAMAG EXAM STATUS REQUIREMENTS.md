---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RAMAG EXAM STATUS REQUIREMENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RAMAG EXAM STATUS REQUIREMENTS{:/}
 tag | {::nomarkdown}EXMSTREQ{:/}
 routine | [RAMAGRP2](http://code.osehra.org/dox/Routine_RAMAGRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The RAMAG EXAM STATUS REQUIREMENTS remote procedure returns a descriptorthat indicates conditions that should be met in order to successfully perform an action on an exam/case record. These conditions are defined by the sites and stored in the EXAMINATIONSTATUS file (#72). See the .1 and .5 nodes of the data dictionary of thefile #74 for more details.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The RACTION parameter defines the action that is going to be performed on an exam/case record:   E  Examined (procedure has been performed,     images have been acquired)   C  Complete{:/} | 
| {::nomarkdown}RAIMGTYI{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the imaging type in the IMAGING TYPE file (#79.2).{:/} | 
| {::nomarkdown}RAPROC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Radiology procedure IEN (file #71). This parameter is required todetermine exact nuclear medicine requirements (pieces of the Results[0]from 17 to 25). By default (+$G(RAPROC)=0), this remote procedure cannot examine theSUPPRESS RADIOPHARM PROMPT field (2) of the RAD/NUC MED PROCEDURES file(#71) and might indicate that some nuclear medicine data is required evenif it is not.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}