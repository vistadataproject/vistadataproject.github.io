---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM EN ENTER_EDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIRPARM EN ENTER_EDIT{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will enter/edit the entries in the DSIR FACILITY PARAMETERS File (#10620.701).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the INSTITUTION File (#4).{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array containing the data to be stored in the DSIR FACILITY PARAMTERS File (#19620.701) in the below format.        Field Number ^ Internal Data Value        *NOTE: Since this file is DINUM the data array does NOT need the .01 fieldpassed, it is the INST parameter. This parameter is optional, but if nothing is passed nothing will be updated and the return will be an unsuccessful result.{:/} | 




 Generated on January 13th 2017, 5:52:13 am