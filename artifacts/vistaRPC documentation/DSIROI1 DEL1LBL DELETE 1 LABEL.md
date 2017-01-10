---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI1 DEL1LBL DELETE 1 LABEL 

 property | value 
--- | --- 
 label | DSIROI1 DEL1LBL DELETE 1 LABEL
 tag | DEL1LBL
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | SINGLE VALUE
 description | This routine deletes one label from the label file (19620.14.)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CIEN | LITERAL | 20 | true | Clerk ID is the IEN from file 200 for the requesting clerk. | 
| vs:Input_Parameter-8994_02 | RIEN | LITERAL | 20 | true | RIEN is the Requestor IEN.  This points to file 19620.12 | 
| vs:Input_Parameter-8994_02 | AIEN | LITERAL | 20 | true | AIEN is the IEN of the address record.  This points at file 19620.92. | 