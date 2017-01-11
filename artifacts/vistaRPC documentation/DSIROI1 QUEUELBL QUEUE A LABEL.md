---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI1 QUEUELBL QUEUE A LABEL 

 property | value 
--- | --- 
 label | DSIROI1 QUEUELBL QUEUE A LABEL
 tag | QUEUELBL
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | SINGLE VALUE
 description | This routine adds a label to an individual clerk's queue for batch printing.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CIEN | LITERAL | 20 | true | CIEN is the clerk IEN.  This points at file 200. | 
| RIEN | LITERAL | 20 | true | RIEN is the requestor IEN.  This points to file 19620.12. | 
| AIEN | LITERAL | 20 | true | AIEN is the address IEN.  This points at file 19620.92. | 




Generated on January 11th 2017, 6:34:23 am