---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM EN ENTER_EDIT 

 property | value 
--- | --- 
 label | DSIRPARM EN ENTER_EDIT
 tag | EN
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | SINGLE VALUE
 description | This RPC will enter/edit the entries in the DSIR FACILITY PARAMETERS File (#10620.701).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INST | LITERAL | 99 | true | This is the pointer to the INSTITUTION File (#4). | 
| DATA | LIST | 99 | true | This is an array containing the data to be stored in the DSIR FACILITY PARAMTERS File (#19620.701) in the below format.        Field Number ^ Internal Data Value        *NOTE: Since this file is DINUM the data array does NOT need the .01 fieldpassed, it is the INST parameter. This parameter is optional, but if nothing is passed nothing will be updated and the return will be an unsuccessful result. | 




 Generated on January 11th 2017, 7:15:04 am