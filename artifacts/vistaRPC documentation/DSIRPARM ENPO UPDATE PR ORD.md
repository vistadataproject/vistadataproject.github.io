---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM ENPO UPDATE PR ORD 

 property | value 
--- | --- 
 label | DSIRPARM ENPO UPDATE PR ORD
 tag | ENPO
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to enter/edit the default Print Order of documents released by each facility specified in the DSIR FACILITY PARAMETERS File (#19620.701).  This data is stored in the DSIR ROI PRINT ORDER File (#19620.702).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INST | LITERAL | 99 | true | Pointer to the DSIR FACILITY PARAMETERS File (#19620.701) same as INSTITUTION File (#4). | 
| PRTORD | LITERAL | 30 | true | Print Order IEN or Name if adding a new entry in the DSIR ROI PRINT ORDER File (#19620.702). | 
| PRSEQ | LITERAL | 245 | true | Print Order Sequence as specified by the ROI Plus GUI application. | 
| PRTIEN | LITERAL | 99 | true | Print Order IEN (Optional - if null a new entry will be created, for edit it is Required)This is the IEN for the entry in file 19620.702 | 




Generated on January 11th 2017, 6:34:23 am